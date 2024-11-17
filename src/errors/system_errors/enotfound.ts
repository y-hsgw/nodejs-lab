import https from 'https';

const invalidHost = 'nonexistent.domain.example';

const options: https.RequestOptions = {
  hostname: invalidHost,
  port: 80,
  path: '/',
  method: 'GET',
};

const req = https.request(options, (res) => {
  console.log(`ステータスコード: ${res.statusCode}`);
});

req.on('error', (error) => {
  console.log(error);
});

req.end();
