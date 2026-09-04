// A class should be responsible for its data, not for displaying it.
//A blue print of a student manager

export default class StudentManager{
    constructor(){
        this.students_data = [];
    }

    addStudent(...students){    //rest collects all the arg as an array
        for(let i = 0; i < students.length; i++){

            const alreadyExists = this.students_data.some(student => student.id === students[i].id);
            
            if(!alreadyExists){
                this.students_data.push(students[i]);
            }else{
                console.log('Found student with duplicate ID', students[i].id);
            }
        }
    }

    returnStudents(){
        return [...this.students_data];     //returnning a copy of a student array
    }

    findStudent(id){
        return this.students_data.find(student => student.id === id); 
    }

    removeStudent(id){
        this.students_data = this.students_data.filter(student => student.id !== id);
        return [...this.students_data];
    }

    updateStudent(id, updatedInfo){     //only 2 parameters, doesn't need to use 'rest' in this update method
        let oldStudent = this.findStudent(id);

        if(oldStudent){
            const updatedStudent = {...oldStudent, ...updatedInfo, id};     //a new ID a user could add can be overwrite by the last 'id' param
            oldStudent = updatedStudent;

            this.students_data = this.students_data.map(student => 
                student.id === oldStudent.id ?  oldStudent : student
            );
            
        }
        
        return oldStudent;
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

    addCourse(id, newCourse){
        const student = this.findStudent(id);
        
        if(student){
            const { courses } = student;

            const courseExists = courses.some(course => course.id === newCourse.id);    //some() stops the iterating as soon as it returns true.

            if(courseExists){
                console.log('Duplicated Course ID found!');
                return student;
            }

            courses.push(newCourse);

            return student;
        }

        console.log('No student found with this ID, try another ID');
    }

    findCourse(id, courseId){
        const student = this.findStudent(id);

        if(student) return student.courses.find(course => course.id === courseId);

        console.log('No student found with this ID, try another ID');
    }

    removeCourse(id, courseId){
        const student = this.findStudent(id);

        if(student){
            student.courses = student.courses.filter(course => course.id !== courseId);
            return student;
        }

        console.log('No student found with this ID, try another ID');
    }

    updateCourseScore(id, courseId, updatedScore){
        const course = this.findCourse(id, courseId);

        if(course) course.score = updatedScore;

        return this.findStudent(id);
    }

    studentAcademicSummary(id){
        const student = this.findStudent(id);
        
        if(student){
            const {name, courses = []} = student;

            const totalScore = courses.reduce((acc, curr) => {
                acc += curr.score;

                return acc;
            }, 0);

            const averageScore = courses.length > 0 ? totalScore / courses.length : 0;

            return {name, courses, averageScore};
        }

        console.log('No student with this ID, try another one');
    }

    searchStudents(searchItems){
        const result = this.students_data.filter((student) => {
            const { name, major } = student;
            return name.toLowerCase().includes(searchItems.toLowerCase()) 
            || major.toLowerCase().includes(searchItems.toLowerCase());
        });

        return result;
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
