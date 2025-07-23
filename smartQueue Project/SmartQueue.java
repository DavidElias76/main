import javax.swing.*;
import java.awt.*;
import java.util.LinkedList;

class Patient {
    static int counter = 1;
    int queueNumber;
    String name;
    boolean isEmergency;

    public Patient(String name, boolean isEmergency) {
        this.queueNumber = counter++;
        this.name = name;
        this.isEmergency = isEmergency;
    }

    public String toString() {
        return "#" + queueNumber + " - " + name + (isEmergency ? " (EMERGENCY)" : "");
    }
}

public class SmartQueue extends JFrame {
    private final LinkedList<Patient> queue = new LinkedList<>();
    private final JTextArea queueDisplay = new JTextArea(10, 30);
    private final JTextField nameField = new JTextField(20);
    private final JCheckBox emergencyCheck = new JCheckBox("Emergency case");

    public SmartQueue() {
        setTitle("SmartQueue Health Management System");
        setSize(400, 350);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null); // center

        queueDisplay.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(queueDisplay);

        JButton registerBtn = new JButton("Register Patient");
        JButton treatBtn = new JButton("Treat Next Patient");

        registerBtn.addActionListener(e -> registerPatient());
        treatBtn.addActionListener(e -> treatNextPatient());

        JPanel inputPanel = new JPanel();
        inputPanel.setLayout(new GridLayout(0, 1));
        inputPanel.add(new JLabel("Enter patient name:"));
        inputPanel.add(nameField);
        inputPanel.add(emergencyCheck);
        inputPanel.add(registerBtn);
        inputPanel.add(treatBtn);
        inputPanel.add(new JLabel("Current Queue:"));
        inputPanel.add(scrollPane);

        add(inputPanel);
        setVisible(true);
    }

    private void registerPatient() {
        String name = nameField.getText().trim();
        if (name.isEmpty()) {
            JOptionPane.showMessageDialog(this, "Please enter a name.");
            return;
        }

        boolean isEmergency = emergencyCheck.isSelected();
        Patient p = new Patient(name, isEmergency);

        if (isEmergency) {
            queue.addFirst(p);
        } else {
            queue.addLast(p);
        }

        nameField.setText("");
        emergencyCheck.setSelected(false);
        updateQueueDisplay();
        JOptionPane.showMessageDialog(this,
                "Registered: " + p.name + "\nQueue Number: #" + p.queueNumber + "\nEstimated wait: " + (queue.indexOf(p) * 5) + " minutes");
    }

    private void treatNextPatient() {
        if (queue.isEmpty()) {
            JOptionPane.showMessageDialog(this, "No patients in queue.");
            return;
        }

        Patient p = queue.removeFirst();
        updateQueueDisplay();
        JOptionPane.showMessageDialog(this, "Treating patient: " + p.name + " (Queue #" + p.queueNumber + ")");
    }

    private void updateQueueDisplay() {
        queueDisplay.setText("");
        for (int i = 0; i < queue.size(); i++) {
            queueDisplay.append((i + 1) + ". " + queue.get(i).toString() + "\n");
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(SmartQueue::new);
    }
}