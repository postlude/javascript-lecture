function Student() {

}

Student.createInstance = function() {
    if(Student.instance) {
        return Student.instance;
    }else {
        Student.instance = new Student('stu');
        return Student.instance;
    }
}

var student = new Student();
var student2 = Student.createInstance();
var student3 = Student.createInstance();

// 불가
// student.createInstance();

console.log(student3 === student2);