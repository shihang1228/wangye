 
/*鼠标向下滚动  动作：站不稳*/ 
window.onscroll=function(){$("#bofang").stop();

	var b=document.getElementById("bofang");
	b.innerHTML="<div style='width:300px; height:300px; position:relative;border:#000000 solid 0px;background:url(女-站不稳.gif) no-repeat;'></div>";

	var iID=setTimeout(clock,1000);

	function clock(){
	b.innerHTML="<div style='width:120px;height:120px;border:#000000 solid 0px; position:relative;top:0px;background:url(站立.png) no-repeat;'></div>"}
}
 
/* 动作：出现*/ 
function dl(){$("#bofang").stop();
	var a=document.getElementById("a");

	a.style.display="inline";
	var b=document.getElementById("bofang");
	b.style.display="inline";
	b.innerHTML="<div style='width:300px; height:300px;border:#000000 solid 0px;background:url(女-出现.gif) no-repeat;'></div>";

	/*3.5秒后执行动作：站立*/
	var iID=setTimeout(cx,3500);
	function cx(){b.innerHTML="<div style='width:300px; height:300px;;border:#000000 solid 0px;background:url(站立.png) no-repeat;'></div>";}
}

   
/*在编辑器中输入字后执行对应的动作 start*/
function bq(){
       
	var s=document.getElementById("p2").value;
    var b=document.getElementById("bofang");
	   
	d=[]
	for(i=0;i<s.length;i++){d.push(s.charAt(i))}
 
	for(j=0;j<d.length;j++) {if(d[j]=="哭"||d[j]=="色"||d[j]=="辉"||d[j]=="笑")break;}
	
	switch(d[j]){
	
	case "哭":
	{
		$("#bofang").stop();
		b.innerHTML="<div style='width:120px;height:120px;border:#000000 solid 0px; position:relative;top:0px; left:25px;background:url(哭.gif) no-repeat;'></div>";
		var iID=setTimeout(clock,3000);
		function clock(){
			b.innerHTML="<div style='width:120px;height:120px;border:#000000 solid 0px; position:relative;top:0px;background:url(站立.png) no-repeat;'></div>"
		}
		break;
	}

	case "辉":
	{
		$("#bofang").stop();
		b.innerHTML="<div style='width:120px;height:120px;border:#000000 solid 0px; position:relative;top:0px; left:25px;background:url(女-挥手.gif) no-repeat;'></div>"
		var iID=setTimeout(clock,3000);
		function clock(){
			b.innerHTML="<div style='width:120px;height:120px;border:#000000 solid 0px; position:relative;top:0px;background:url(站立.png) no-repeat;'></div>"
		}

		break;
	}

	case "笑":
	{
		$("#bofang").stop();
		b.innerHTML="<div style='width:120px;height:120px;border:#000000 solid 0px; position:relative;top:0px; left:25px;background:url(女-笑.gif) no-repeat;'></div>"

		var iID=setTimeout(clock,1800);
		function clock(){
		b.innerHTML="<div style='width:120px;height:120px;border:#000000 solid 0px; position:relative;top:0px;background:url(站立.png) no-repeat;'></div>"}
		break;
	}

	case "色":	
	{
		$("#bofang").stop();
		b.innerHTML="<div style='width:120px;height:120px;border:#000000 solid 0px; position:relative;top:0px; left:25px;background:url(女-色.gif) no-repeat;'></div>"
		var iID=setTimeout(clock,1800);
		function clock(){
			b.innerHTML="<div style='width:120px;height:120px;border:#000000 solid 0px; position:relative;top:0px;background:url(站立.png) no-repeat;'></div>"
		}
		break;
	}
}}
 
/*end 在编辑器中输入字后执行对应的动作*/
 
/*双击鼠标执行动作：小人按鼠标双击的方向走 start*/
document.ondblclick=function bt(ev){

	var oEvent=ev||event;
var oLeft=oEvent.clientX+'px';
var oTop=oEvent.clientY+'px';
 var oLeft1 = oEvent.clientX;
var left=document.getElementById("bofang").style.left;
var top=document.getElementById("bofang").style.top;
var left1=parseInt(left); if(isNaN(left1) ){left1=0;}
var top1=parseInt(top); if(isNaN(top1) ){top1=0;} 
     var xx=(oEvent.clientX-left1)*(oEvent.clientX-left1);
   var yy=(oEvent.clientY-top1)*(oEvent.clientY-top1);
   var zz=xx+yy;
   var zzz=Math.sqrt(zz);
   var zs=Math.round(zzz);
 
   var sj=zs/40*1000;   
  var b=document.getElementById("bofang");


       function dong(){

		   $("#bofang").stop();
		   $("#bofang").animate({left:oLeft,top:oTop},sj);}


			if(oLeft1>left1){ b.innerHTML="<div style='width:300px; height:300px;;border:#000000 solid 0px;background:url(一直走右1.gif) no-repeat;'></div>";
				var yd=setTimeout(dong,0);
  		    }
		    if(oLeft1<left1){b.innerHTML="<div style='width:200px;; height:200px;;border:#000000 solid 0px;background:url(一直走1.gif) no-repeat;'></div>";
				var yd=setTimeout(dong,000);		 
			}
		 if(oLeft1==left1){b.innerHTML="<div style='width:200px; height:200px;;border:#000000 solid 0px;background:url(女-往左走.gif) no-repeat;'></div>";}


 function bd(){ 
  var left=document.getElementById("bofang").style.left;
  var left1=parseInt(left); if(isNaN(left1) ){left1=0;}
   var oLeft1 = oEvent.clientX;
  if(left1==oLeft1)
  { var b=document.getElementById("bofang");
                        b.innerHTML="<div style='width:120px; height:110px;;border:#000000 solid 0px;background:url(站立.png) no-repeat;'></div>";}
   
    }
setInterval(bd,1000);
}


 
/*function tc(){$("#bofang").stop();
var b=document.getElementById("bofang");
b.innerHTML="<div style='width:300px; height:300px;;border:#000000 solid 0px;background:url(女-消失.gif) no-repeat;'></div>";
 var bian=setTimeout(xs,1500);
function xs(){b.style.display="none";}
}*/

	function tc(){$("#bofang").stop();
var b=document.getElementById("bofang");

var a=document.getElementById("a");
b.innerHTML="<div style='width:300px; height:300px;;border:#000000 solid 0px;background:url(女-消失.gif) no-repeat;'></div>";
 var bian=setTimeout(xs,1500);
function xs(){b.style.display="none";a.style.display="none";}
}
	
	
	 var rDrag = {
 o:null,
  init:function(o){
  o.onmousedown = this.start;
  
 },
 start:function(e){
	 $("#bofang").stop(); var b=document.getElementById("bofang");
                        b.innerHTML="<div style='width:120px; height:110px;;border:#000000 solid 0px;background:url(站立.png) no-repeat;'></div>";
  var o;
  e = rDrag.fixEvent(e);
               e.preventDefault && e.preventDefault();
               rDrag.o = o = this;
  o.x = e.clientX - rDrag.o.offsetLeft;
                o.y = e.clientY - rDrag.o.offsetTop;
  document.onmousemove = rDrag.move;
  document.onmouseup = rDrag.end;
 },
 move:function(e){
  e = rDrag.fixEvent(e);
  var oLeft,oTop;
  oLeft = e.clientX - rDrag.o.x;
  oTop = e.clientY - rDrag.o.y;
  rDrag.o.style.left = oLeft + 'px';
  rDrag.o.style.top = oTop + 'px';
 },
 end:function(e){
  e = rDrag.fixEvent(e);
  rDrag.o = document.onmousemove = document.onmouseup = null;
  
 },
    fixEvent: function(e){
        if (!e) {
            e = window.event;
            e.target = e.srcElement;
            e.layerX = e.offsetX;
            e.layerY = e.offsetY;
          }return e;
		 
    }
}
 window.onload = function(){
        var obj = document.getElementById('a');
 rDrag.init(obj);
} 
  			function mouseover(){ 
document.getElementById("m").style.display="inline";
	}
	function mouseout() {
		document.getElementById("m").style.display="none";
		  var atop=document.getElementById("a").offsetTop;
	    
	   var aleft=document.getElementById("a").offsetLeft;
             if(atop<=-200)
			{  
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("a").style.top = "-200px";
			document.getElementById("a").style.left = "aleft";
			}
			  if(atop>=300)
			{  
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("a").style.top = "300px";
			document.getElementById("a").style.left = "aleft";
			}
			if(aleft>=1024)
			{  
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("a").style.top = "atop";
			document.getElementById("a").style.left = "1024px";
			}
			if(aleft<=-200)
			{  
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("a").style.top = "atop";
			document.getElementById("a").style.left = "-200px";
			}
		  
	}
	function mouse1(){
var o=document.getElementById("a");
	var i=o.offsetTop;
	var h=o.offsetLeft;
	
	
	
document.getElementById("chart").style.left=h;

 
  document.getElementById("chart").style.display="inline"; 
 
	   
	}
	function a(){var o=document.getElementById("a");
	
	var i=o.offsetTop;
	var h=o.offsetLeft;
	$("#chart").css("top",i+360);
   $("#chart").css("left",h+110);
   $("#show").css("top",i+0);
   $("#show").css("left",h+340)
   		 var sstop=document.getElementById("show").offsetTop;
	            var ssleft=document.getElementById("show").offsetLeft;
			  
				      if(sstop<=-20)
			{  
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("show").style.top = "-80px";
			document.getElementById("show").style.left = "ssleft";
			}
			 
			 if(ssleft>1340)
			{  
			
			document.getElementById("a").style.position = "fixed*absolute"; 
 			document.getElementById("show").style.top = "sstop";
			document.getElementById("show").style.left = "1100px";
			}
					      if(sstop>500)
			{  
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("show").style.top = "400px";
			document.getElementById("show").style.left = "ssleft";
			}
				 if(ssleft<100)
			{  
			
			document.getElementById("a").style.position = "fixed*absolute"; 
 			document.getElementById("show").style.top = "sstop";
			document.getElementById("show").style.left = "100px";
			}
  }
  function mouseout1() {
	if(
	document.getElementById("chart").style.display=="inline"){
	 
	document.getElementById("chart").style.display="none";}
	 if(
	document.getElementById("musicbegin").style.display=="block"){
	 
	document.getElementById("musicbegin").style.display="none";}
	}

   
	 function sss(){
        var p=document.getElementById("chart1");
		 var p1=document.getElementById("p1");
		  var p2=document.getElementById("p2");
   			   p1.value=p2.value;
 			   p2.value=p.value;
                p.value="";
 				if(p2.value!="")
               {p2.style.backgroundColor="#66CCFF";}
			    if(p2.value=="")
				{p2.style.backgroundColor="transparent";}
				if(p1.value!="")
               {p1.style.backgroundColor=" #CCFFFF";}
			    if(p1.value=="")
				{p1.style.backgroundColor="transparent";}
				 var sstop=document.getElementById("show").offsetTop;
	            var ssleft=document.getElementById("show").offsetLeft;
		
		
			      var s=document.getElementById("p2").value;
       var b=document.getElementById("xr");
	 	   
			   
				      if(sstop<=-50)
			{  
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("show").style.top = "-80px";
			document.getElementById("show").style.left = "ssleft";
			}
			 
			 if(ssleft>1200)
			{  
			
			document.getElementById("a").style.position = "fixed*absolute"; 
			 
			document.getElementById("show").style.top = "sstop";
			document.getElementById("show").style.left = "980px";
			}
			 bq()
	 
	 }