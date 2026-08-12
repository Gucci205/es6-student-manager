"type": "module" -> tells node treat all .js file as Es6 modules, not CommonJS
"start": "node app.js" -> just type npm start and it will run the js on local server, don't need to write node app.js anymore

# Modern JS Student Manager

A console-based Student Management System built with Node.js to practice modern JavaScript (ES6–ES11) features through a practical project.

The main goal of this project is not to build a complex application or user interface, but to strengthen my understanding of modern JavaScript by applying its features to real program logic.

## Features

The application is being built step by step and currently supports:

- Creating students and courses
- Adding students to the student manager
- Viewing students
- Finding a student by ID
- Removing a student
- Updating student information
- Generating simplified student reports

More functionality is added as new JavaScript concepts are practiced.

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

This is a learning project.

Rather than focusing on UI/UX, the project runs in the terminal so I can focus on JavaScript logic and understand when and why modern JavaScript features are used.
