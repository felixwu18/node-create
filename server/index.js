// 引用模块
var express = require('express');
var app = express();
// var router = require("./router.js"); // 导入自定义的路由模块
var data = require("./data.js"); // 导入自定义的路由模块


// 中间件
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // 将中间件注入express,


//设置跨域访问（设置在所有的请求前面即可）
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method == 'OPTIONS')
    res.send(200); //让options尝试请求快速结束
  else
    next();
});

//处理post请求
app.post('/', function (req, res) {
  console.log(req.body,1111111); //前端发送的请求内容
  // res.send('post successfully!');
  res.send(data.d2);
  // res.send(obj);
});
app.get('/33/*', function(req, res) {
    console.log(req.body); //前端发送的请求内容
  //   res.send('get successfully!');
    res.send(data.d1);
  });
app.get('/66/*', function(req, res) {
    console.log(res, 232323); //前端发送的请求内容
    res.send('get successfully!');
    // res.send(obj);
  });
//监听
// var server = app.listen(6600, function() {
//   console.log('引用实例,访问地址为 http://127.0.0.1:6600');
// });
var server = app.listen(6800, function () {
  // var port = server.address().port
  console.log('引用实例,访问地址为 http://127.0.0.1:6800');
});
// app.listen(6600);
// console.log('引用实例,访问地址为 http://127.0.0.1:6600');


// app.get('/',function(req,res){
//   res.send('Hello World');
// });
// app.get('/zs',function(req,res,){
//   res.send('你好,get,张三');
// });
// app.get('/zs',function(req,res,){
//   res.send('你好,get,张三');
// });


/*
-- -- -- -- > 前端代码

fetch("http://127.0.0.1:6600/", {
    method: "post",
    body: JSON.stringify({
      opt: "add",
      sex: "nan"
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json" //此处请求头为json
    }
  })
  .then(function(d) {
    return d.text();
  })
  .then(function(d) {
    console.info(JSON.parse(d));
  });

*/
