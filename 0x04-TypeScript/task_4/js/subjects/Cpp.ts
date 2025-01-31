// task_4/js/subjects/Cpp.ts
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    ...
    
      export class Cpp extends Subject {
        getRequirements() {
          return 'Here is the list of requirements for Cpp';
        }
    
        getAvailableTeacher() {
          if (this.teacher && this.teacher.experienceTeachingC > 0) {
            return 'Available Teacher: ' + this.teacher.firstName;
          } else {
            return 'No available teacher';
          }
        }
      }
    }