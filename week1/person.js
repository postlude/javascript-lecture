var john = {
    name: 'john',
    sayHi: function() {}
}
var descriptor = Object.getOwnPropertyDescriptor(john, 'sayHi');
// console.log(descriptor);

Object.defineProperty(john, 'age', {
    value: 11,
    writable: false
});

john.age = 22;
console.log(john.age); // 11

var descriptor2 = Object.getOwnPropertyDescriptor(john, 'age');
console.log(descriptor2);
// enumerable: false 이므로 console.log(john) 로 봐도 age가 안보임
// but console.log(john.age) 는 값이 나옴
console.log(john);

Object.defineProperty(john, 'toString', {
    value: function() {
        console.log('john mc k');
    },
    enumerable: false
});
john.toString();
for(const key in john) {
    console.log(key);
}

var johnJSON = JSON.stringify(john);
console.log(johnJSON);


console.log('====================');


var user2 = {};
Object.defineProperty(user2, '_name', {
    enumerable: false,
    writable: true,
    configurable: true
})
Object.defineProperty(user2, 'name', {
    get: function() {
        console.log('getter');
        // return 'harry';
        return this._name || 'harry';
    },
    set: function(name) {
        console.log('setter', name);
        this._name = name;
    },
    enumerable: true
});
// console.log(user2.name);
user2.name = 'john';
// console.log(user2.name);
console.log(JSON.stringify(user2));