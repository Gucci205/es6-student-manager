// A class should be responsible for its data, not for displaying it.
//A blue print of a student manager

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
        return this.students_data.filter(student => student.id !== id);
    }

    updateStudent(id, updatedInfo){     //only 2 parameters, doesn't need to use 'rest' in this update method
        const student = this.findStudent(id);
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

    addCourse(id, ...newCourse){
        const student = this.findStudent(id);

        if(student){
            student.courses.push(...newCourse);
            return student;
        }

        console.log('No student found with this ID');
    }

    findCourse(id, courseId){
        const student = this.findStudent(id);

        if(student){
            return student.courses.find(course => course.id === courseId);
        }

        console.log('No student found with this ID, try another Id');
    }

    removeCourse(id, courseId){
        const student = this.findStudent(id);
        if(student){
            student.courses = student.courses.filter(course => course.id !== courseId);
            return student;
        }

        console.log('No student found with this ID');
    }

    updateCourseScore(id, courseId, updatedScore){
        let course = this.findCourse(id, courseId);

        if(course){
            course.score = updatedScore;
        }

        return this.findStudent(id);
    }

    studentAcademicSummary(id){
        let student = this.findStudent(id);
        let totalScore = 0;
        student.courses.forEach((course) => {
            totalScore += course.score;
        })

        let averageScore = totalScore / student.courses.length;
        const {name, courses} = student;

        return {name, courses, averageScore};
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
