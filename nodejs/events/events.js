var EventEmitter=require('events').EventEmitter;

var life=new EventEmitter();

life.on('find',function(){
	console.log('ok, give')
})

life.emit('find')