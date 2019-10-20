'use strict';

class Student{
    learn(){
        console.log('Student is learning something new.');
    }
    question(teacher){
        teacher.answer();
    }
};

class Teacher{
    teach(student){
        student.learn();
    }
    answer(){
        console.log('Teacher is answering a question.');
    }
}

const student1 = new Student();
const teacher1 = new Teacher();
student1.question(teacher1);
teacher1.teach(student1);