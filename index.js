const express = require('express');
const app = express();
const port = process.env.PORT;
const service = process.env.SVC

app.get("/", (req, res) => {
  console.log('::', req.path)
  res.status(200).send(`This is ${service} Server`);
});

app.post(`/use-${service}`, (req, res) => {
  let returnJson = '';
  let status = '';
  if(isProcessSuccess()) {
    status = 200
    returnJson = {
      reqPath : req.path,
      code : 'Success',
      message : '성공'
    }
  } else {
    status = 400
    returnJson = {
      reqPath : req.path,
      code : 'Fail',
      message : '실패'
    }
  }
  console.log('::', req.path, '::', status, '::', returnJson)
  res.status(status).send(returnJson);
});

app.post(`/rollback-${service}`,(req, res) => {
  let returnJson = {
    reqPath : req.path,
    code : 'Success',
    message : '성공'
  };
  let status = 200;
  console.log('::', req.path, '::', status, '::', returnJson)
  res.status(status).send(returnJson);
});

function isProcessSuccess() {
  const randomValue = Math.random();
  return (randomValue > 0.5)
}

app.listen(port, () => {
  console.log(`${service} Server is running`, port);
});
