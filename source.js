
var arr = ['./2.jpg','./4.jpg','./6.jpg', './7.jpg'];
 var i = 0; 
function run(){
   document.img1.src = arr[i]
  
if(i<arr.length - 1){
    i++;
} else {
   i = 0
}
 setTimeout('run()',2000)
}
run();
