var studentProto = {
    study: function(subject) {
        console.log(subject + ' study');
        this.energy -= 1;
        this.exp += 10;
    }
}

var yeoseo = Object.create(studentProto);
yeoseo.name = '강예서';
yeoseo.energy = 100;
yeoseo.exp = 100;

// var yeoseo = {
//     name: '강예서',
//     energy: 100,
//     exp: 100,
    // __proto__: studentProto
// }


yeoseo.study('math');
console.log(yeoseo);

var hyena = {
    name: '김혜나',
    energy: 100,
    exp: 200,
    __proto__: studentProto
}
hyena.study('eng');
console.log(hyena);

// factory 함수
function createStudent(name) {
    var student = Object.create(studentProto);
    student.name = name;
    student.energy = 0;
    student.exp = 0;
    return student;
}

var john = createStudent('john');
john.study('ddd');


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

var kim = new Student('name');
kim.study('math');
// new 없이 사용하면 undefined 가 들어가고 Student() 내부의 this. 들은 전역 객체가 된다.
var anna = Student('anna');
console.log(name);

console.log(kim.constructor);

