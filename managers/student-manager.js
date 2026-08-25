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

    updateStudent(id, updatedInfo){     //only 2 parameters, doesn't need to use rest in this update method
        let student = this.findStudent(id);
        const updatedStudent = {...student, ...updatedInfo};

        this.students_data = this.students_data.map((student) => {
            return student.id === updatedStudent.id ?  updatedStudent : student;
        });

        return this.students_data;
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
