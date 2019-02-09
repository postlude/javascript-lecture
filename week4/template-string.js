/* const name = 'jay';
function func(ary, ...values) {
    console.log(ary);
    console.log(values);
    return 'test';
    // return 123;
}
console.log(func`${1} hello ${name}`); */

// chrome
function div(parts) {
    const div = document.createElement('div');
    div.innerHTML = parts[0];
    return div;
}


function test() {

}

let tt = new test();
console.log(tt);