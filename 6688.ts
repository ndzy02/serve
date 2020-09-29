import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import config from './config';
const servePathList = config.servePathList;

const app = express();
app.set('port', process.env.PORT || config.port);
for (let index = 0; index < servePathList.length; index++) {
  const element = servePathList[index];
  app.use(element.url, express.static(element.path));
}

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
app.use(
  cors({
    origin: config.originUrl, //允许访问
    optionsSuccessStatus: 200
  })
);
// 正常返回数据
app.get('/test1', (req, res) => {
  setTimeout(() => {
    res.send({
      status: '0',
      data: 'ok'
    });
  }, 1000);
});

// 登录过期
app.get('/test2', (req, res) => {
  setTimeout(() => {
    res.send({
      status: '100',
      data: 'ok'
    });
  }, 1000);
});

app.listen(app.get('port'), () => {
  console.log(` app listening on port ${app.get('port')}!`);
});
