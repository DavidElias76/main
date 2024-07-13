CREATE TABLE Student (
    StudentID INT,
    FirstName VARCHAR(10),
    Surname VARCHAR(10),
    LastName VARCHAR(15),
    Address TEXT(30),
    Age INT
);


CREATE TABLE Lecturer (
    LecturerID INT,
    FirstName VARCHAR(15),
    Surname VARCHAR(15),
    LastName VARCHAR(15),
    Address TEXT(30)
);
CREATE TABLE Course (
    CourseCode INT,
    CourseName VARCHAR(10),
    Department VARCHAR(10),
    CourseFee INT 
);


INSERT INTO Student (StudentID, FirstName, Surname, LastName, Address, Age) VALUES
(001, 'Jane', 'Wanja', 'Kamau', '24 Nairobi', 19),
(002, 'Jacob', 'Amos', 'Wanjohi', '35 Nakuru', 28),
(003, 'Steve', 'Omondi', 'Kunjoo', '20 Nakuru', 25),
(004, 'Caroline', 'Wanjiru', 'Karanja', '45 Nairobi', 20);


INSERT INTO Lecturer (LecturerID, FirstName, Surname, LastName, Address) VALUES
(001, 'Amos', 'Kamau', 'Kamas', '4 Nairobi'),
(002, 'William', 'Kamau', 'Njoro', '15 Naivasha'),
(003, 'Chris', 'Omondi', 'Karanja', '35 Nakuru'),
(004, 'Emma', 'Wanjiru', 'Kamau', '30 Nairobi');


INSERT INTO Course (CourseCode, CourseName, Department, CourseFee) VALUES
(101, 'IBIT', 'FOCIM', 10000),
(102, 'BIT', 'SPP', 30000),
(103, 'BSO', 'FOCIM', 20000),
(104, 'BCO', 'FOCIM', 50000);

