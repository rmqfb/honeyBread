const {odd, even} = require('.');

function checkOddOrEven(num) {
    if (num % 2) { // 홀수면
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;

// require, module 은 노드의 내장 객체

/* ES2015 스타일로 변경시  >> node 9 버전부터 ES2015 사용시 확장자를 mjs로 지정, 실행시 node --experimental-modules [파일명] 식의 옵션 제한 有

import {odd, even} from './var';

function checkOddOrEven(num) {
    if (num % 2) { // 홀수면
        return odd;
    }
    return even;
}

export default checkOddOrEven;

*/