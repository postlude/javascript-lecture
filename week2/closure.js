function counter() {
    var num = 0;
    return function print() {
        console.log(++num);
    }
}

var count = counter();
count();
count();
count();
count();

var count2 = counter();
count2();


// 만들 때마다 getAge, gainAge가 생성되므로 javascript 스럽지 않다는 의견도 있음
var User = function() {
    var privateAge = 20;
    return {
        getAge: function() {
            return privateAge - 1;
        },
        gainAge: function() {
            privateAge++;
        }
    }
}

var jay = User();
var tom = User();

jay.gainAge();
console.log(jay.getAge());
console.log(tom.getAge());