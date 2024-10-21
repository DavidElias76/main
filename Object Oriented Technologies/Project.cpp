#include <iostream>
#include <vector>
#include <string>
#include <iomanip> // for formatting

using namespace std;

// Struct to store task details
struct Task {
    string taskName;
    string deadline;
    bool isCompleted;
};

// Function prototypes
void addTask(vector<Task> &tasks);
void displayTasks(const vector<Task> &tasks);
void markTaskComplete(vector<Task> &tasks);
void deleteTask(vector<Task> &tasks);

int main() {
    vector<Task> tasks; // Vector to store the list of tasks
    int choice;

    do {
        // Display menu options
        cout << "\nTime Management System\n";
        cout << "1. Add Task\n";
        cout << "2. View Tasks\n";
        cout << "3. Mark Task as Complete\n";
        cout << "4. Delete Task\n";
        cout << "5. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;
        cin.ignore(); // to consume the newline character after user input

        switch (choice) {
            case 1:
                addTask(tasks);
                break;
            case 2:
                displayTasks(tasks);
                break;
            case 3:
                markTaskComplete(tasks);
                break;
            case 4:
                deleteTask(tasks);
                break;
            case 5:
                cout << "Exiting the Time Management System. Goodbye!\n";
                break;
            default:
                cout << "Invalid choice! Please try again.\n";
        }
    } while (choice != 5);

    return 0;
}

// Function to add a task
void addTask(vector<Task> &tasks) {
    Task newTask;
    cout << "Enter task name: ";
    getline(cin, newTask.taskName);
    cout << "Enter task deadline (e.g., 2024-10-15): ";
    getline(cin, newTask.deadline);
    newTask.isCompleted = false; // New tasks are incomplete by default
    tasks.push_back(newTask);
    cout << "Task added successfully!\n";
}

// Function to display all tasks
void displayTasks(const vector<Task> &tasks) {
    if (tasks.empty()) {
        cout << "No tasks available.\n";
        return;
    }

    cout << left << setw(30) << "Task Name" << setw(15) << "Deadline" << "Status\n";
    cout << "-------------------------------------------------------------\n";

    for (size_t i = 0; i < tasks.size(); ++i) {
        cout << left << setw(30) << tasks[i].taskName << setw(15) << tasks[i].deadline;
        if (tasks[i].isCompleted) {
            cout << "Completed\n";
        } else {
            cout << "Pending\n";
        }
    }
}

// Function to mark a task as complete
void markTaskComplete(vector<Task> &tasks) {
    if (tasks.empty()) {
        cout << "No tasks to mark as complete.\n";
        return;
    }

    int taskNumber;
    cout << "Enter the task number to mark as complete: ";
    cin >> taskNumber;

    if (taskNumber > 0 && taskNumber <= tasks.size()) {
        tasks[taskNumber - 1].isCompleted = true;
        cout << "Task marked as complete!\n";
    } else {
        cout << "Invalid task number!\n";
    }
}

// Function to delete a task
void deleteTask(vector<Task> &tasks) {
    if (tasks.empty()) {
        cout << "No tasks to delete.\n";
        return;
    }

    int taskNumber;
    cout << "Enter the task number to delete: ";
    cin >> taskNumber;

    if (taskNumber > 0 && taskNumber <= tasks.size()) {
        tasks.erase(tasks.begin() + taskNumber - 1);
        cout << "Task deleted successfully!\n";
    } else {
        cout << "Invalid task number!\n";
    }
}
