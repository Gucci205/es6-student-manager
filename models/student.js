/* a blue print class of student */

export default class Student {      
    constructor(id, name, age, email, major){
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.major = major;
        this.courses = [];
    }
}

//this refers to the current object most of the time
//constructor is not an object, it is a special method. 
// Student class isn't also an object

/* 
    so, what the 'this' keyword refers to? 
    In app.js, I created the new empty object linked it to this Student class. Now there is an object.
    When the constructor is called like this('001',  'Lwin', 21, 'berry@example.com', 'Computer Science'), 'this' keyword rfers to that newly created object. 
    Then return the object and assign it to the variable 'student'
    
*/