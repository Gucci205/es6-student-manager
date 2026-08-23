// A class should be responsible for its data, not for displaying it.

export default class StudentManager{
    constructor(){
        this.students_data = [];
    }

    addStudent(...student){
        this.students_data.push(...student);
    }

    returnStudents(){
        return this.students_data;
    }

    findStudent(id){
        return this.students_data.find(student => student.id === id); 
    }

    removeStudent(id){
        return this.students_data = this.students_data.filter(student => student.id !== id);
    }

    updateStudent(id, { name, age, email, major } = {}){    //parameter destructuring
        let student = this.findStudent(id);

        if(student){
            student.name = name;
            student.age = age;
            student.email = email;
            student.major = major;
        }
    }

    studentReport(){
        return this.students_data.map(({id, name, major}) => {
            return {id, name, major};
        });
    }

    countStudentOfEachMajor(){
        return this.students_data.reduce((acc, curr) => {
            acc[curr.major] = (acc[curr.major] || 0) + 1;   //Take the current count for this major. If it doesn't exist yet, use 0. Then add 1.
            
            return acc;
        }, {});
    }
}


/* 
    to manage students' data, such as
    - Add Student
    - Delete Student
    - Edit Student
    - Search Student
    - Calculate GPA
    - Statistics

    A constructor is only needed if you want to initialize the object when it's created.
*/
