function a() {
    var b = 'a';
    if(true) {
        let b = '3';
    }
    console.log(b);
}
a();


let getValue, setValue;
{
    let data = {};
    getValue = function(key) {
        return data[key];
    }
    setValue = function(key, val) {
        data[key] = val;
    }
}
setValue('a', 1);
console.log(getValue('a'));

for(let i=0; i<3; i++) {
    setTimeout(function() {
        console.log(i);
    });
}

// let name = 'bye';
// (function() {
//     console.log(name); // temporal dead zone. name에 값이 할당되기 전까지 사용불가. 전역에 동일 변수가 있어도 에러 발생.
//     let name = 'hello';
// })();


const cont_obj = {};
// const_obj = {}; // 불가능
const_obj.h = 3; // 가능. const 로 만든 객체는 불변(immutable)이 아니다.

