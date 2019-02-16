// const name = 'jay';
// function tag(parts, ...values) {
//     console.log(parts);
//     console.log(values);
//     return 'ohohoh';
// }
// console.log(`${1} hello ${name}`);
function div(parts) {
    const div = document.createElement('div');
    div.innerHTML = parts[0];
    return div;
}
console.log(div`hi`);