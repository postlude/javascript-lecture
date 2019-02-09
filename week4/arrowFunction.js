const sum1 = function(...args) {
    return args.reduce(function(a, b) {
        return a + b;
    });
}

const sum2 = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sum1(1, 2, 3));
console.log(sum2(1, 2, 3));


const arrow = () => {
    // 사용 불가
    console.log(arguments);
}
arrow(1, 2, 3);


const obj = {
    d: 'aaa',
    hello: () => {
        // this
        setTimeout(() => {
            console.log(this.d); // 전역이 아닌 상위 this
        });
    }
};

