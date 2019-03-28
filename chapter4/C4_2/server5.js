const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

// 쿠키는 문자열 형식 > name=zerocho;year=1994 을 { name: 'zerocho', year: '1994' } 객체로 바꾸는 함수
const parseCookies = (cookie = '') => 
    cookie
    .split(';')
    .map(v => v.split('='))
    .map(([k, ... vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    }, {});

const session = {};

http.createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith('/login')) {
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        const randomInt = +new Date();
        session[randomInt] = {
            name,
            expires,
        };
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `session=${randomInt}; Expires=${expires.toGMTString()}; HttpOnly; path=/`,
        });
        res.end();
    } else if (cookies.session && session[cookies.session].expires > new Date()) {
        res.writeHead(200, { 'Content-Type' : 'text/thml; charset=utf8' });
        res.end(`${session[cookies.session].name}님 안녕하세요`);
    } else {
        fs.readFile('./server4.html', (err, data) => {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    } 
})
    .listen(8084, () => {
        console.log('8084번 포트에서 서버 대기 중입니다!');        
    });