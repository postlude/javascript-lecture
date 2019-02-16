// function sum(first, ...args) {    
//     // console.log(args);
//     return args.reduce((a, b) => a + b, first);
// }

// sum(1, 2, 3)
// function a(...values) {
//     console.log(values);
// }
// a(...[1, 2, 3, 4])
// var d = "hello";
// console.log([1, 3, ...d])
// var v = [2, 3];
// var d = [4, 5];
// var c = [...v, ...d];
// console.log(c);

// function buildUserInfo(
//   id, 
//   obj = {}
// ) {
//   const { name = '-', email } = obj
//   return `${name}과 ${email}`;
// }

// const info = buildUserInfo({ email: 'je' });
// console.log(info);

const sum = 
  (...args) => args.reduce((a, b) => a + b, 0);

const arrowFunction = () => {
  // console.log('arguments');
  // console.log(arguments);
}
arrowFunction(1, 2, 3);

const obj = {
  d: '2',
  hello: function() {
    // this
    setTimeout(() => {
      console.log(this.d);
    })
  }
}
obj.hello();
