const axios = require('axios');

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGfpbXMiOm1zXhwIjozNzQtC@MzQ0LCpYXQiOjE3NDM1NzQwNDQsImIzcyI6IkFmZm9yZGl1ZCIsImp0aSI6ImQ5Y2JiNjk5LTZhMjctNDRhNS04ZDU5LThiMWJiZmE4MTZkYSIsInN1YiI6InJhbWtyaXNobmFAYWJjLmVkdSIsInVkbSI6Im5hbWUiOiJvYW0ga3Jpc2huYSIsInJvbGxObyI6ImFhMWJiIiwiYWNjZXNzQ29kZSI6InhQXNOQyIsInNsaWVuVudElEIjoiZDIjYmI2OTktNmEyYy00NGE1LThkNTktOGIxYmVmTgxNmRhIiwiY2xpZW50U2VjcmV0IjoidFZKYWFhUkJTZVhJUlhlTSJ9.YApD98gqOIN_0Ww7JMFmuUfK1m4hLTm7AIcLDcLAzVg';

async function Log(stack, level, pkg, message) {
  try {
    await axios.post('http://20.244.56.144/eva1uation-service/logs', {
      stack,
      level,
      package: pkg,
      message
    }, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });
  } catch (err) {
    
  }
}

module.exports = Log;
