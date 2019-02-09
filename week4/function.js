function sum(first, ...args) {
    console.log(args);
    return args.reduce((a, b) => a + b, first);
}
console.log(sum(1, 2, 3));


function a(...values) {
    console.log(values);
}
// a(1, 2, 3, 4);
a([1, 2, 3, 4]); // 배열 안 배열
a(...[1, 2, 3, 4]); // 배열이 풀림


function buildUserInfo({ name='default name', email='default email' }) {
    let userObj = {};
    userObj.name = name;
    userObj.email = email;
    return userObj;
}
const info = buildUserInfo({
    name: 'name', email: 'email', age: 10, 
});
console.log(info);