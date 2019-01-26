var proto = {
    a: 1,
    increase: function() {
        this.a += 1;
    }
}

// function ProtoFunc() {

// }
// ProtoFunc.prototype.a = 1;
// ProtoFunc.prototype.increase = function() {
//     this.a += 1;
// }

var c = Object.create(proto);
// var c = Object.create(ProtoFunc.prototype);
// var c = {};
// c.__proto__ = proto;

var b = Object.create(proto);
// var b = Object.create(ProtoFunc.prototype);

proto.a = 10;

// c.increase();
console.log(c.a);
console.log(b.a);

// ProtoFunc.prototype.a = 2;
// console.log(c.a);
// console.log(b.a);

// console.log(c);