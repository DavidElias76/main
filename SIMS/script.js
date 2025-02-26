// Initialize an array to store student data
let students = [];

// Function to add a new student
function addStudent() {
  const name = document.getElementById('student-name').value;
  const dob = document.getElementById('student-dob').value;
  const contact = document.getElementById('student-contact').value;
  const email = document.getElementById('student-email').value;

  // Validate input fields
  if (!name || !dob || !contact || !email) {
    alert("Please fill in all fields!");
    return;
  }

  // Create a new student object
  const newStudent = {
    name,
    dob,
    contact,
    email,
  };

  // Add the student to the array
  students.push(newStudent);

  // Clear the form
  document.getElementById('student-input').reset();

  // Update the table
  updateStudentTable();
}

// Function to update the student table
function updateStudentTable() {
  const tableBody = document.getElementById('students-table-body');
  tableBody.innerHTML = ''; // Clear existing rows

  // Loop through the students array and create table rows
  students.forEach((student, index) => {
    const row = document.createElement('tr');

    // Create cells for each field
    const nameCell = document.createElement('td');
    nameCell.textContent = student.name;

    const dobCell = document.createElement('td');
    dobCell.textContent = student.dob;

    const contactCell = document.createElement('td');
    contactCell.textContent = student.contact;

    const emailCell = document.createElement('td');
    emailCell.textContent = student.email;

    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.backgroundColor = 'red';
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    deleteButton.style.padding = '5px 10px';
    deleteButton.style.cursor = 'pointer';
    deleteButton.addEventListener('click', () => deleteStudent(index));

    actionCell.appendChild(deleteButton);

    // Append cells to the row
    row.appendChild(nameCell);
    row.appendChild(dobCell);
    row.appendChild(contactCell);
    row.appendChild(emailCell);
    row.appendChild(actionCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

// Function to delete a student
function deleteStudent(index) {
  students.splice(index, 1); // Remove the student from the array
  updateStudentTable(); // Update the table
}

// Event listener for adding a student
document.getElementById('student-input').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  addStudent(); // Add the student
});