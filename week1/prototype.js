function Student(name) {
    this.name = name,
    this.energy = 0,
    this.exp = 0,
    this.study = function(subject) {
        console.log(subject + ' study');
        this.energy -= 1;
        this.exp += 10;
    }
}

function JSStudent(name) {
    Student.call(this, name);
}
JSStudent.prototype = Object.create(Student.prototype);
JSStudent.prototype.learnJS = function () {
    console.log('learn');
}

var stu = new JSStudent('stu');
stu.study('js');
stu.learnJS();