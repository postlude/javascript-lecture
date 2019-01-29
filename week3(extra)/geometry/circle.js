// ** 2 : 제곱
// module.exports.getCircleArea = r => Math.PI * r ** 2;
// module.exports.getCircleCircumference = r => 2 * r * Math.PI;

var getCircleArea = r => Math.PI * r ** 2;
var getCircleCircumference = r => 2 * r * Math.PI;

// module.exports = {
//     circleArea: getCircleArea,
//     circleCircumference: getCircleCircumference
// }

exports.circleArea = getCircleArea;
exports.circleCircumference = getCircleCircumference;

console.log(module.exports === exports);