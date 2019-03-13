const { odd, even } = require('./var');


function checkStringOddOrEven(str) {
    if(str.length % 2) { // 홀수면
        return odd;
    }
    return even;
}

console.log(checkStringOddOrEven('hello'));
console.log(module.exports === exports);

/*
const odd = '홀수입니다';
const even = '짝수입니다';

module.exports = {
    odd, 
    even,
};

exports.odd = '홀수입니다ㅎ';
exports.even = '짝수입니다ㅎ';

exports.odd = '홀수입니다ㅋㅋ';
exports.even = '짝수입니다ㅋㅋ';
*/