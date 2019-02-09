let cart = {
    getProduct(id) {
        return {
            id,
            name: 'product 1',
            price: 2000
        }
    }
};
const { price } = cart.getProduct(1);
console.log(price);

var user = {
    [price]: 3, // computed property, 표현식 들어감
    price: 3
}
console.log(user);


// symbol
const HELLO_SYMBOL = Symbol('hello'); // 고유한 값
console.log(Number(3) === Number(3));
console.log(Symbol(3) === Symbol(3));
console.log(HELLO_SYMBOL === HELLO_SYMBOL);

const nationality = Symbol('nationality');
const user2 = {
    name: 'jay',
    [nationality]: 'KOREAN'
};
console.log(user2);
console.log(user2[nationality]);
console.log(JSON.stringify(user2));
const pd = Object.getOwnPropertyDescriptor(user2, nationality);
console.log(pd);
const pr = Object.getOwnPropertySymbols(user2);
console.log(pr);

console.log(Symbol.for('hello') === Symbol.for('hello')); // true

var obj2 = {
    [Symbol.toPrimitive](hint) {
        console.log(hint);
        if(hint === 'number') {
            return 1;
        }else if(hint === 'string') {
            return 'hello';
        }else {
            return undefined;
        }
        // return 1;
    }
};
console.log(+{});
console.log(+obj2);
console.log(`${obj2}`);

let obj3 = { a: 2 };
let obj4 = { b: 3, arr: [1, 2, 3] };
const obj5 = Object.assign({}, obj3, obj4);
console.log(obj3);
console.log(obj5);

const {a, b, arr: [first, ...others]} = obj5;
console.log(first);
console.log(others);

