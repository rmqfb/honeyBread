/*
const odd = '홀수입니다.';
const even = '짝수입니다.';

module.exports = {
    odd,
    even,
};

*/

exports.odd = '홀수입니다.';
exports.even = '짝수입니다.';  // 반드시 속성명과 속성값을 대입

// console.log(module.exports === exports); // 결과 : true 같은 객체 참조  