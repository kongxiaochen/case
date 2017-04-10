function datePicker(){
   this.date=new Date();
   this.selectedEle = null;

   this.init();
}
datePicker.prototype={
	days:['日','一','二','三','四','五','六'],

	init:function(){
		$("#calendarEle").hide();
        function createEle() {
            var ele = $('<span>')
                .css('text-align', 'center')
                .css('display', 'inline-block')
                .css('width', '50px')
                .css('height', '50px')
                .css('line-height', '50px');

            return ele;
        }
        //星期日到星期六
        for(var i=0;i<7;i++){
        	var el=createEle().html(this.days[i]).appendTo($("#calendarEle"));
        	if(i===0||i===7){
        		el.css('color','rgb(200,17,1)');
        	}
        }
        //日期部分
        for(var i=0;i<42;i++){
        	var ele=createEle().css('cursor','pointer').appendTo($("#calendarEle"));
        }
        this.renderByDate(this.date);

        $('#show').click(function(e){
           $('#calendarEle').toggle();
        });
        
        var self=this;
        //****************重点*****************
        $('#calendarEle').click(function(){
        	self.calendarClicked(event);
        });       
        $('#arrLeft').click(function(){
        	self.preMonth();
        });
        $('#arrRight').click(function(){
        	self.nextMonth();
        });


	},
	renderByDate:function(date){
		$(".title").html(date.getFullYear()+'年'+(date.getMonth()+1)+'月');
        var dat=new Date(date);
        dat.setDate(1);
        dat.setDate(1-dat.getDay());  //找到第一个日期

        var allspan=$("span");

        for(var i=0;i<42;i++){
        	var ele=$(allspan.get(i+7)).html(dat.getDate()).css('background-color','white');

        	if(dat.getMonth()!==date.getMonth()){
        		ele.css('color','lightgrey');
        	}else{
        		if(dat.getDay()===0||dat.getDay()===6){
        			ele.css('color','red');
        		}else{
        			ele.css('color','');
        		}
        	}
        if(dat.getTime()===date.getTime()){
        	ele.css('background-color','red').css('color','#fff');
        	this.selectedEle = ele;
        }
        dat.setDate(dat.getDate()+1);}

	},
	calendarClicked:function(e){
		if($('#calendarEle').is(':hidden')){
			return;
		}else if(e.target.nodeName==='SPAN'){
			var allSpan=$('span'),
			    index=allSpan.index($(e.target)),
			    selectedIndex=allSpan.index(this.selectedEle);
			var dat=new Date(this.date);
			dat.setDate(dat.getDate() + index - selectedIndex);
			this.selectDate(dat);
			$('#show').val(this.getSelectedDate());
	
			alert('选择了日期' + this.getSelectedDate());
			setTimeout(function(){$("#calendarEle").hide();},200);

			
		}
	},
	preMonth:function(){
		var dat=new Date(this.date);
		dat.setMonth(dat.getMonth()-1);
		this.selectDate(dat);
	},
	nextMonth:function(){
		var dat=new Date(this.date);
		dat.setMonth(dat.getMonth()+1);
		this.selectDate(dat);
	}, 
	selectDate:function(date){
		if(date.getMonth()===this.date.getMonth()){
			var allspan=$("span"),
			    oIndex=allspan.index(this.selectedEle),
			    ele=allspan.get(oIndex+date.getDate()-this.date.getDate());
			this.selectedEle.css('background-color','white').css('color','black');
			this.selectedEle=$(ele).css('background-color','red').css('color','white');
		}else{
			this.renderByDate(date);
		}
		this.date=date;
	},
	getSelectedDate:function(){
		var y=this.date.getFullYear(),
		    m=this.date.getMonth()+1,
		    d=this.date.getDate();
		var arrdate=y+"年"+m+"月"+(d<10?'0'+d:d)+"日";
		return arrdate;
	}
    
};
