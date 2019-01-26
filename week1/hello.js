console.log('hello js');

// statement 선언문
if(true) {
    1 + 1
} else {
    0
}

// expression 표현식
(true) ? 1 + 1 : 0


// statement
function hello() {

}
// expression
var hello = function() {

}


var javaScriptTeacherA = {
    teach: function(student) {
        student.learn('javascript');
    }
}

javaScriptTeacherA.name = 'teacherA';
javaScriptTeacherA.age = 11;
console.log(javaScriptTeacherA);

var prop = (true) ? "" : "";
javaScriptTeacherA[prop];

// property 제거
delete javaScriptTeacherA.age;
console.log(javaScriptTeacherA);

var teacherB = new Object();
var teacherC = Object.create(null);

console.log(javaScriptTeacherA);
console.log(teacherB);
console.log(teacherC);
