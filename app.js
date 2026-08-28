import Student from "./models/student.js";
import Course from "./models/course.js";
import StudentManager from "./managers/student-manager.js";

//add the student and course data

//create a student object
const student = new Student('001', 'Lwin', 21, 'lwin@example.com', 'Computer_Science');    
const student2 = new Student('002', 'Moe', 24, 'moe@example.com', 'Marketing');
const student3 = new Student('003', 'Aung', 27, 'aung@example.com', 'Architecture');
const student4 = new Student('004', 'Tony', 27, 'tony@example.com', 'Engineering');
const student5 = new Student('005', 'Tony Tun Tun', 27, 'tonytuntun@example.com', 'Architecture');

// create a course object
const courseOne = new Course('A01', 'Web Development', 129);
const courseTwo = new Course('A02', 'Data Structure and Algorithms', 150);

//add courses to a student object
student.courses.push(courseOne, courseTwo);   

//create a studentManager object
const studentManager = new StudentManager();    

//add each student object to studentManger object as a parameter through method 
studentManager.addStudent(student, student2, student3, student4, student5);     

//receive the student object from StudentManager 
// console.log(studentManager.returnStudents());    

//find the student object with this id
// console.log(studentManager.findStudent('001'));     

//only keep the student objects which doesn't match this id
// console.log(studentManager.removeStudent('002'));   

//update the student info
// console.log(studentManager.updateStudent('001', 
//     {
    //         name: 'Berry',
    //         email: 'berry@example.com',
    //     }
// ));

//print students report
// console.log(studentManager.studentReport());

//count the number of student in each major
// console.log(studentManager.countStudentOfEachMajor());

//add course to the student
console.log(studentManager.addCourse('002', 
    {
        id: 'A03',
        subject_name: 'Cloud Engineer',
        score: 143
    },
    {
        id: 'A04',
        subject_name: 'Data Analyst',
        score: 173
    }
));

//find courses from a student
console.log(studentManager.findCourse('002', 'A03'));

//remove a course from a student
// console.log(studentManager.removeCourse('002', 'A04'));
