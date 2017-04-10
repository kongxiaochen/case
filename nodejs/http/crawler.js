var http=require('http');
var url='http://www.imooc.com/learn/348';
var cheerio=require('cheerio');

function filterChapters(html){
	var $=cheerio.load(html);
	var chapters=$('.chapter');
    
    var courseData=[];
    chapters.each(function(item){
    	var chapter=$(this);
    	var chapterTitle=chapter.find('strong').contents().filter(function(){
    		return this.nodeType===3;
    	}).text().trim();
    	var videos=chapter.find('.video').children('li');
        
    	var chapterData={
    	  chapterTitle:chapterTitle,
    	  videos:[]
    	}

    	videos.each(function(item){
    	  var video=$(this);

    	  var videoTitle=video.find('.J-media-item').contents().filter(function(){
    	  	 return this.nodeType===3;
    	  }).text().trim();
    	  
    	  var videoId=video.attr('data-media-id');
          
    	  chapterData.videos.push({
    	  	title:videoTitle,
    	  	id:videoId

    	  })
    	})
    	courseData.push(chapterData);
    })
    return courseData;
}

function printCourseInfo(courseData){
	courseData.forEach(function(item){
		console.log(item.chapterTitle+'\n');

		item.videos.forEach(function(video){
			console.log('['+video.id+']'+video.title+'\n');
		})

	})
}

http.get(url,function(res){
	var html='';
	res.on('data',function(data){
		html+=data;
	})
	res.on('end',function(){
		var courseData=filterChapters(html);
		printCourseInfo(courseData);
	})
}).on('error',function(){
	console.log('获取课程内容出错');
})