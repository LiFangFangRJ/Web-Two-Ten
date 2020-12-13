//实现小图放大效果
var bannerbg=document.getElementsByClassName("bannerbg")[0];
var smallpic = document.getElementById("smallpic");
var imgList = smallpic.getElementsByTagName("img");
var bigpic = document.getElementById("bigpic");
for(var i = 0; i < imgList.length; i++) {
    imgList[i].onclick = function() {
        for(var i = 0; i < imgList.length; i++) {
                if(imgList[i].hasAttribute("class")) {
               imgList[i].removeAttribute("class");
            }
        }
        this.setAttribute("class", "pb");
        var imgSrc = this.getAttribute("src");
        bigpic.setAttribute("src", imgSrc);

        this.setAttribute("index", 1);
    }
}
//实现显示时间的效果
function pan(num){
    if(num<10){
        num="0"+num;
    }else{
        num=num;
    }
    return num;
}
time.innerHTML="This is an exciting moment";
setInterval(function(){
    var time=document.getElementById("time");
    var data=new Date();
    var year=data.getFullYear();
    var month=data.getMonth()+1;
    var day=data.getDate();
    var h=data.getHours();
    var m=data.getMinutes();
    var s=data.getSeconds();
    time.innerHTML="时间："+pan(year)+"/"+pan(month)+"/"+pan(day)+"&nbsp;"+"&nbsp;"+pan(h)+":"+pan(m)+":"+pan(s);	
},1000);
//实现导航栏循环图片效果
var img=["images/1000608.jpg","images/319898.jpg","images/b6fc1b92d3384f7f96a0e7a7e073d579[1].jpg"];
var i=0;
var len=img.length;
var isStart=false;
function changeImg(){
   if(isStart==false){
       var nameList=img;
       timeid=setInterval(function(){
           bannerbg.style.backgroundImage="url('"+nameList[(i++)%nameList.length]+"')";
       },1000);
       isStart=true;
   }else{
       isStart=false;
       clearInterval(timeid);
   }
}
changeImg();
//个人中心位置注册提示
var inpOne=document.getElementById("inpOne");
var pacakgeOne=document.getElementById("pacakgeOne");
var inpTwo=document.getElementById("inpTwo");
var pacakgeTwo=document.getElementById("pacakgeTwo");
var regest=document.getElementById("regest");
var caseOne=document.getElementById("caseOne");
var caseTwo=document.getElementById("caseTwo");
var caseThree=document.getElementById("caseThree");
inpOne.onfocus=function(){            
    pacakgeOne.innerHTML="支持中文数字";
}
inpOne.onblur=function(){
    if(inpOne.value==""){
        pacakgeOne.innerHTML="用户名不能为空";
    }else{
        pacakgeOne.innerHTML="";
    }
}
inpTwo.onfocus=function(){            
    pacakgeTwo.innerHTML="建议至少使用两种字符组合";
}
inpTwo.onblur=function(){
    if(inpTwo.value==""){
        pacakgeTwo.innerHTML="密码不能为空";
    }else{
        pacakgeTwo.innerHTML="";
    }
} 
//回到顶部
function goTop(){
    var odiv = document.getElementById("top");
    //将滚动距离设置为0，兼容性写法
    document.documentElement.scrollTop = document.body.scrollTop = 0;
}

window.onscroll = function(){
    var odiv = document.getElementById("top");
    
    //获取垂直滚动条的滚动距离，兼容性写法
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
    
    if(scrollTop > 600){	
        odiv.style.display = "block";
    } else {
        odiv.style.display = "none"
    }
}          
