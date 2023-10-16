const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  
  // 가독성을 위한 단수 함수 래핑
  function serverErrorlog() {
    res.writeHead(500);
    return res.end('서버에 문제가 생겼습니다.');
  }
})