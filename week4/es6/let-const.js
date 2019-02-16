function a() {
    let b = 'a';
    if (true) {
        let b = '3';
    }
    console.log(b);
}
// a();
let getValue, setValue;
{
    let data = {};
    getValue = function(key) {
        return data[key]
    }
    setValue = function(key, val){
        data[key] = val;
    }
}
setValue('a', 1);
// console.log(getValue('a'));
// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     });
// }
// console.log(data);
// const myName = "";
// (function() {
//     // console.log(myName);
//     myName = 'hello';
// })();
var CONT_OBJ = {}
CONT_OBJ.push('ddd');







