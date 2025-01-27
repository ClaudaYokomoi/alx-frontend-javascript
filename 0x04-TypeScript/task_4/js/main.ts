// Importing the necessary classes from the 'subjects' directory
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

// Creating and exporting constants for subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Creating and exporting a Teacher object
export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10, // Setting experienceTeachingC to 10
};

// CPP Subject
console.log('C++');
cpp.setTeacher(cTeacher); // Setting cTeacher as the teacher
console.log(cpp.getRequirements()); // Logging the requirements
console.log(cpp.getAvailableTeacher()); // Logging the available teacher

// Java Subject
console.log('Java');
java.setTeacher(cTeacher); // Setting cTeacher as the teacher
console.log(java.getRequirements()); // Logging the requirements
console.log(java.getAvailableTeacher()); // Logging the available teacher

// React Subject
console.log('React');
react.setTeacher(cTeacher); // Setting cTeacher as the teacher
console.log(react.getRequirements()); // Logging the requirements
console.log(react.getAvailableTeacher()); // Logging the available teacher
