"type": "module" -> tells node treat all .js file as Es6 modules, not CommonJS
"start": "node app.js" -> just type npm start and it will run the js on local server, don't need to write node app.js anymore

# Modern JS Student Manager

A console-based Student Management System built with Node.js to practice modern JavaScript (ES6–ES11) features through a practical project.

The project focuses on clean program logic and ES6+ features rather than a graphical interface.

## Features

- Create `Student` and `Course` objects 
- Add students with duplicate student-ID protection 
- View all students without exposing the manager's internal array 
- Find, update, and remove students by ID 
- Generate simplified student reports 
- Count students in each major
- Add a course to a student
- Prevent duplicate course IDs for the same student
- Find and remove courses for a student
- Update a student's score for a particular course
- Generate an academic summary with the student's courses and average score
- Search students by name or major

## JavaScript Concepts Practiced

This project is used to practice concepts such as:

- `let` and `const`
- Classes and constructors
- `this`
- Objects
- ES Modules (`import` / `export`)
- Arrow functions
- Object destructuring
- Parameter destructuring
- Spread and rest syntax
- Array methods
  - `find()`
  - `filter()`
  - `map()`
  - `reduce()`
   - `some()`
  - `includes()`

The project will continue to use ES6–ES11 features where they naturally fit.

## Project Structure

```text
student-management-system/
│
├── app.js
├── package.json
│
├── models/
│   ├── student.js
│   └── course.js
│
├── managers/
│   └── student-manager.js
│
├── utils/
│
└── data/
```

### `app.js`

The entry point of the application. It creates objects, calls the manager methods, and displays results.

### `models/`

Contains classes representing the application's data.

- `Student` represents one student.
- `Course` represents one course.

### `managers/`

Contains the logic for managing students.

`StudentManager` is responsible for operations such as adding, finding, updating, removing, and reporting students.

### `utils/`

Reserved for reusable helper functions needed by the application.

### `data/`

Reserved for application data.

## Running the Project

Make sure Node.js is installed.

Install the project:

```bash
npm install
```

Run it:

```bash
npm start
```

## Purpose

This is a learning project for applying ES6+ features in a realistic program. It currently runs in the terminal and uses sample operations in `app.js` rather than an interactive menu.
