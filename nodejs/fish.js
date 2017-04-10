var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});
 
var ans = 0;
var cur_line = 0;
var minSize,maxSize,n;
var fishSize = [];
rl.on('line', function(line){ // javascript每行数据的回调接口
   if (cur_line===0) { // 测试用例第一行读取n
       minSize = line.trim().split(' ')[0];
       maxSize = line.trim().split(' ')[1];
       cur_line += 1;
   } else if(cur_line === 1) {
       n = parseInt(line.trim());
       cur_line += 1;
   } else if(cur_line === 2) {
       fishSize = line.split(' ');
       cur_line += 1;
   }
     
   if (cur_line === 3) {
       // 输出结果
       fishSize = fishSize.sort(function(a,b){return a-b;});
       var min = fishSize[0];
       var max = fishSize[n-1];
       for(var i=minSize; i<=maxSize; i++){
           if( (i>max/2||i<min/10)&&(i>10*max||i<2*min) ){
               ans++;
           }
       }
       console.log(ans);
   }
});