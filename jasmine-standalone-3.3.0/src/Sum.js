// function sum(num1, num2, ...args) {
function sum() {
    // var result = 0;
    // for(let index=0; index<arguments.length; index++) {
    //     const argument = arguments[index];
    //     result += argument;
    // }
    // return result;

    // Array.from(arguments) : 객체인 arguments를 배열로 변환
    return Array.from(arguments).reduce((a, b) => a+b, 0);
}