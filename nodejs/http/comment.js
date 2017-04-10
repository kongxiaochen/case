var http=require('http');
var querystring=require('querystring');

var postData=querystring.stringify({
	'content':'啦啦啦，测试一下，不要封号哦~',
	'cid':348
})

var options={
	hostname:'www.imooc.com',
	port:80,
	path:'/course/document',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/video/8837',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2783.4 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
	}

}

var req=http.request(options,function(res){
	console.log('Status:'+res.statusCode);
	console.log('headers:'+JSON.stringify(res.headers));

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})

	res.on('end',function(){
		console.log('评论完毕！')
	})
	
	
})

req.on('error',function(e){
	    console.log('Error:'+e.massage);
    })
	
req.write(postData);
req.end();

