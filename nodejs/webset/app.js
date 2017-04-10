var express=require('express')
var port=process.env.PROT || 3000;
var app=express();

app.set('views','./views') //设置视图的根目录
app.set('view engine','jade')           //设置默认的模板引擎，这里用的是jade
app.listen(port)           //监听端口

console.log('webset started on port:'+port);

