// let cart = {
//     getProduct(id) {
//         return {
//             id,
//             name: 'product 1',
//             price : 2000
//         }
//     }
// }
// const { price } = cart.getProduct(1)
// console.log(price);
// var user = {
//     [Symbol()]: 3,
//     price: 3
// }

// 3
// 'dd'
// true
// Number(3)
// String(3)
// const HELLO_SYMBOl = Symbol('hello')
// console.log(Number(3) === Number(3))
// console.log(HELLO_SYMBOl === Symbol('hello'))

// const nationality = Symbol('nationality')
// const user2 = {
//     name: 'jay',
//     [nationality]: 'KOREAN'
// }
// console.log(user2);
// console.log(user2[nationality]);
// console.log(JSON.stringify(user2));
// const pd = Object.getOwnPropertyDescriptor(user2, nationality);
// console.log(pd);
// const pr = Object.getOwnPropertySymbols(user2);
// console.log(pr);

// console.log(Symbol.for('hello') === Symbol('hello'));
// // Symbol.toPrimitive
// var obj2 = {
//     [Symbol.toPrimitive](hint) {
//         console.log(hint);
//         if (hint === 'number') {
//             return 1;
//         } else if (hint === 'string') {
//             return 'hello';
//         } else {
//             return undefined; 
//         }
//     }
// }
// console.log(+{})
// console.log(`${obj2}`)

let obj1 = { a: 2 };
let { a } = obj2;
let obj2 = { b: 3, arr: [1, 2, 3] };
let obj3 = Object.assign({}, obj2, obj1);
console.log(obj2);
console.log(obj3);
const { a, b, arr: [first, ...others] } = obj3;
console.log(first);
console.log(others);
const arr2 = [1, 2, 3, 4];
const [a, ...b] = arr2;
