var hsd = {};
// Object.defineProperty(hsd, 'name', {
//     value: 'hsd',
//     enumerable: true
// });

Object.defineProperties(hsd, {
    name: {
        value: 'hsd',
        enumerable: true
    },
    class: {
        value: {
            title: 'javascript',
            room: 201,
            roomLimit: 20,
            teacher: '고재도'
        },
        enumerable: true
    },
})

hsd.class.title = 'test';
console.log(hsd.class.title);