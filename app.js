import Student from "./models/student.js";
import Course from "./models/course.js";
import StudentManager from "./managers/student-manager.js";

//add the student and course data
const student = new Student('001', 'Lwin', 21, 'lwin@example.com', 'Computer Science');    //create a student object
const student2 = new Student('002', 'Moe', 24, 'moe@example.com', 'Marketing');
const student3 = new Student('003', 'Aung', 27, 'aung@example.com', 'Architecture');
const student4 = new Student('004', 'Tony', 27, 'tony@example.com', 'Engineering');
const student5 = new Student('005', 'Tony Tun Tun', 27, 'tonytuntun@example.com', 'Architecture');

const courseOne = new Course('A01', 'Web Development', 129);
const courseTwo = new Course('A02', 'Data Structure', 150);

student.courses = [courseOne, courseTwo];   //add courses to student object

const studentManager = new StudentManager();    //create a studentManager object

studentManager.addStudent(student, student2, student3, student4, student5);     //add each student object to studentManger object as a parameter through method 

console.log(studentManager.returnStudents());    //receive the student object from StudentManager 

// console.log(studentManager.findStudent('001'));     //find the student object with this id

// console.log(studentManager.removeStudent('002'));   //only keep the student objects which doesn't match this id

// studentManager.updateStudent('001', 
//     {
//         name: 'Berry',
//         age: 30,
//         email: 'berry@example.com',
//         major: 'Bussiness'
//     }
// );

// console.log(studentManager.findStudent('001'));

// console.log(studentManager.studentReport());

console.log(studentManager.countStudentOfEachMajor());