/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var cityInput=document.getElementById("aqi-city-input");
var valueInput=document.getElementById("aqi-value-input");
var myNote=document.getElementById("note");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() { 
  var city=cityInput.value.trim();
  var val=valueInput.value.trim();

  
  if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
  	myNote.innerHTML="<span>城市名必须为中文字符！</span>";
  	return;
  }else if(!val.match(/^[\d]+$/)){
  	myNote.innerHTML="<span>空气质量必须为整数！</span>";
  	return;
  }else{
  aqiData[city]=val;}
  

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var items="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for(city in aqiData){
		items+="<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button>删除</button></td>";
	}
	var myTable=document.getElementById("aqi-table");
	myTable.innerHTML=city?items:"";
     
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(obj) {
  // do sth.
  var tr=obj.parentNode.parentNode;
  var city=tr.firstChild.innerText;
  delete aqiData[city];
  renderAqiList();

}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
   document.getElementById("add-btn").addEventListener("click", addBtnHandle);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

   document.getElementById("aqi-table").addEventListener("click",function(event){
   	 var myBtn=event.target;
   	 delBtnHandle(myBtn);
   })

}

init();