CREATE TABLE Student (
    studentID INTEGER PRIMARY KEY,
    FirstName VARCHAR(10),
    Surname VARCHAR(10),
    Lastname VARCHAR(15),
    Address TEXT,
    Age INTEGER
);

CREATE TABLE Lecturer (
    LecturerID INTEGER PRIMARY KEY,
    FirstName VARCHAR(15),
    Surname VARCHAR(15),
    Lastname VARCHAR(15),
    Address TEXT
);

CREATE TABLE Course (
    CourseCode INTEGER PRIMARY KEY,
    CourseName VARCHAR(10),
    Department VARCHAR(10),
    CourseFee INTEGER
);

INSERT INTO Student (studentID, FirstName, Surname, Lastname, Address, Age) VALUES
(1, 'Jane', 'Wanja', 'Kamau', '24 Nairobi', 19),
(2, 'Jacob', 'Amos', 'Waiganjo', '35 Kisumu', 28),
(113, 'Steve', 'Omondi', 'Kaundo', '23 Nakuru', 25),
(4, 'Caroline', 'Wairimu', 'Karanja', '45 Nairobi', 20);

INSERT INTO Lecturer (LecturerID, FirstName, Surname, Lastname, Address) VALUES
(1, 'Amos', 'Kamau', 'Kenga', '4 Nairobi'),
(2, 'William', 'Kamau', 'Njagi', '15 Kisumu'),
(113, 'Chris', 'Omondi', 'Wekesa', '33 Nakuru'),
(4, 'Emma', 'Wangari', 'Kamau', '450 Nairobi');

INSERT INTO Course (CourseCode, CourseName, Department, CourseFee) VALUES
(100, 'BBIT', 'FOCIM', 10000),
(102, 'BIT', 'SPP', 30000),
(103, 'BAC', 'SPP', 50000),
(104, 'BSD', 'FOCIM', 30000);

SELECT * FROM Student WHERE Age > 20;

DELETE FROM Student WHERE studentID = 4;

