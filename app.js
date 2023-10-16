const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  
  // 가독성을 위한 단수 함수 래핑
  function serverErrorlog() {
    res.writeHead(500);
    return res.end('서버에 문제가 생겼습니다.');
  }

  console.log("어떤 요청이 들어오는지 확인", "url -> ", req.url, "method ->", req.method);
  // 라우팅 처리 제작 두개의 요청 데이터를 확인해야 한다.
  // 1. 요청 URL
  // 2. 요청 메서드
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('./static/index.html', 'utf8', (err, data) => {
      if (err) {
        serverErrorlog();
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  } else if (req.url === '/css/style.css' && req.method === 'GET') {
    fs.readFile('./static/css/style.css', 'utf8', (err, data) => {
      if (err) {
        serverErrorlog();
      }
      res.writeHead(200, { 'Content-Type': 'text/css'});
      res.end(data);
    });
  } else if (req.url === '/js/index,js' && req.method === 'GET') {
    fs.readFile('./static/js/index.js', 'utf8', (err, data) => {
      if (err) {
        serverErrorlog();
      }
      res.writeHead(200, { 'Content-Type': 'application/javascript'});
      res.end(data);
    });
  } else {
    res.writeHead(404)
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`cli 창에서 컨트롤 누른 후 옆에 포트 누르면 편리하게 확인 -> http://localhost:${PORT}/`);
})
