
 
window.onscroll=function(){$("#a").stop();

 var b=document.getElementById("bofang");
b.innerHTML="<div style='width:112px; height:150px; position:relative;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nvzbw.gif) no-repeat;'></div>";

 var iID=setTimeout(clock,1000);
function clock(){
b.innerHTML="<div style='width:112px; height:150px;;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nzl.png) no-repeat;'></div>"}
}
 

function dl(){$("#bofang").stop();
 var a=document.getElementById("a");


  a.style.display="inline";
  var b=document.getElementById("bofang");
   b.style.display="inline";
   
b.innerHTML="<div style='width:112px; height:150px;;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nvcx.gif) no-repeat;'></div>";
var iID=setTimeout(cx,3500);
function cx(){b.innerHTML="<div style='width:112px; height:150px;;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nzl.png) no-repeat;'></div>";}
}

   
 
   function bq(){
       
	   var s=document.getElementById("p2").innerText;
       var b=document.getElementById("bofang");
         
		 
	    
	   
	    var a=0;
if(s.indexOf("哭") > -1 ){a=1;} 

 else if(s.indexOf("笑") > -1 ){a=2;} 
 else if(s.indexOf("色") > -1 ){a=3;} 
 else if(s.indexOf("挥手") > -1 ){a=4;} 
 
	switch(a){
		
		
	case 1:
	
	{
		$("#a").stop();
	b.innerHTML="<div style='width:112px; height:150px; position:relative;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nvk.gif) no-repeat;'></div>";
 var iID=setTimeout(clock,3000);
function clock(){
b.innerHTML="<div style='width:112px; height:150px;;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nzl.png) no-repeat;'></div>"}

break;}
case 2:
	{
		
	$("#a").stop();
	b.innerHTML="<div style='width:112px; height:150px; position:relative;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nvx.gif) no-repeat;'></div>";
 var iID=setTimeout(clock,1800);
function clock(){
b.innerHTML="<div style='width:112px; height:150px;;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nzl.png) no-repeat;'></div>"}
break;}
case 3:	
	
{
$("#a").stop();
	b.innerHTML="<div style='width:112px; height:150px; position:relative;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nvs.gif) no-repeat;'></div>";
 var iID=setTimeout(clock,1800);
function clock(){
b.innerHTML="<div style='width:112px; height:150px;;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nzl.png) no-repeat;'></div>"}
break;}

case 4:
{$("#a").stop();
	b.innerHTML="<div style='width:112px; height:150px; position:relative;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nvhs.gif) no-repeat;'></div>";
 var iID=setTimeout(clock,1800);
function clock(){
b.innerHTML="<div style='width:112px; height:150px;;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nzl.png) no-repeat;'></div>"}
break;}
	}}
 
 
 
 
 
 
 
document.ondblclick=function bt(ev){

var oEvent=ev||event;
 	document.getElementById("show1").style.display = "none"; 
		document.getElementById("chart").style.display = "none"; 
	document.getElementById("p1").innerHTML = ""; 
	document.getElementById("p2").innerHTML = ""; 
var oLeft=oEvent.clientX+'px';
var oTop=oEvent.clientY+'px';
 var oLeft1 = oEvent.clientX;
var left=document.getElementById("a").style.left;
var top=document.getElementById("a").style.top;
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
		 
		   $("#a").stop();$("#a").animate({left:oLeft,top:oTop},sj);}
   if(oLeft1>left1){	b.innerHTML="<div style='width:112px; height:150px; position:relative;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nvyz.gif) no-repeat;'></div>";
 	                var yd=setTimeout(dong,0);
  			     }
         
      
   
    
 
 
 
   if(oLeft1<left1){	b.innerHTML="<div style='width:112px; height:150px; position:relative;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nvzz.gif) no-repeat;'></div>";
    var yd=setTimeout(dong,000);
	 
	}
       
   
   if(oLeft1==left1){b.innerHTML="<div style='width:200px; height:200px;;border:#000000 solid 0px;background:url(img/Ů-������.gif) no-repeat;'></div>";}
 
 

 function bd(){ 
 var o=document.getElementById("a");
	
	var i=o.offsetTop;
	var h=o.offsetLeft;
	     if(i<=0)
			{  $("#a").stop();
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("a").style.top = "5px";
			document.getElementById("a").style.left = "h";
				  var b=document.getElementById("bofang");
                        b.innerHTML="<div style='width:112px; height:150px;;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nzl.png) no-repeat;'></div>";
			}
			  if(i>=500)
			{  $("#a").stop();
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("a").style.top = "495px";
			document.getElementById("a").style.left = "h";
			 var b=document.getElementById("bofang");
                        b.innerHTML="<div style='width:112px; height:150px;;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nzl.png) no-repeat;'></div>";
			}
			if(h>=1248)
			{  $("#a").stop();
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("a").style.top = "i";
			document.getElementById("a").style.left = "1240px";
			 var b=document.getElementById("bofang");
                        b.innerHTML="<div style='width:112px; height:150px;;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nzl.png) no-repeat;'></div>";
			}
			if(h<=0)
			{  $("#a").stop();
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("a").style.top = "i";
			document.getElementById("a").style.left = "5px";
			 var b=document.getElementById("bofang");
                        b.innerHTML="<div style='width:112px; height:150px;;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nzl.png) no-repeat;'></div>";
			}
	    
		
		$("#chart").css("top",i+210);
   $("#chart").css("left",h);
  $("#show1").css("top",i-80);
   $("#show1").css("left",h+120);
  var left=document.getElementById("a").style.left;
  var left1=parseInt(left); if(isNaN(left1) ){left1=0;}
   var oLeft1 = oEvent.clientX;
  if(left1==oLeft1)
  { var b=document.getElementById("bofang");
                        b.innerHTML="<div style='width:112px; height:150px;;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nzl.png) no-repeat;'></div>";}
   
    }
setInterval(bd,1000);
}


 
function tc(){$("#bofang").stop();
var b=document.getElementById("bofang");

var a=document.getElementById("a");
var c=document.getElementById("show1");
	b.innerHTML="<div style='width:112px; height:150px; position:relative;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nvxs.gif) no-repeat;'></div>";
 var bian=setTimeout(xs,1500);
function xs(){ a.style.display="none";
document.getElementById("p1").innerHTML = ""; 
	document.getElementById("p2").innerHTML = "";  mouseout1();}
}
	
	
	
	 var rDrag = {
 o:null,
  init:function(o){
  o.onmousedown = this.start;
  
 },
 start:function(e){
	 $("#a").stop(); var b=document.getElementById("bofang");
 b.innerHTML="<div style='width:112px; height:150px;;border:#000000 solid 0px;background:url(http://192.168.1.190/xjdiangou/data/resource/js/img/nzl.png) no-repeat;'></div>";
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
             if(atop<=0)
			{  
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("a").style.top = "5px";
			document.getElementById("a").style.left = "aleft";
			}
			  if(atop>=500)
			{  
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("a").style.top = "495px";
			document.getElementById("a").style.left = "aleft";
			}
			if(aleft>=1248)
			{  
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("a").style.top = "atop";
			document.getElementById("a").style.left = "1240px";
			}
			if(aleft<=0)
			{  
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("a").style.top = "atop";
			document.getElementById("a").style.left = "5px";
			}
		  
	}
	function mouse1(){
		 
var o=document.getElementById("a");
	var i=o.offsetTop;
	var h=o.offsetLeft;
	
	
	
document.getElementById("chart").style.left=h;

 
    var ch=document.getElementById("chart");
	 if(ch.style.display=='none'){ch.style.display='block';}
	 else{ch.style.display='none';}
	 
 
	   
	}
	function a(){var o=document.getElementById("a");
	
	var i=o.offsetTop;
	var h=o.offsetLeft;
	$("#chart").css("top",i+210);
   $("#chart").css("left",h);
   $("#show1").css("top",i-80);
   $("#show1").css("left",h+120)
   		 var sstop=document.getElementById("show1").offsetTop;
	            var ssleft=document.getElementById("show1").offsetLeft;
			  
				      if(sstop<=-20)
			{  
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("show1").style.top = "-80px";
			document.getElementById("show1").style.left = "ssleft";
			}
			 
			 if(ssleft>1340)
			{  
			
			document.getElementById("a").style.position = "fixed*absolute"; 
 			document.getElementById("show1").style.top = "sstop";
			document.getElementById("show1").style.left = "1100px";
			}
					      if(sstop>500)
			{  
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("show1").style.top = "400px";
			document.getElementById("show1").style.left = "ssleft";
			}
				 if(ssleft<100)
			{  
			
			document.getElementById("a").style.position = "fixed*absolute"; 
 			document.getElementById("show1").style.top = "sstop";
			document.getElementById("show1").style.left = "100px";
			}
  }
  function mouseout1() {
	if(
	document.getElementById("chart").style.display=="block"){
	 
	document.getElementById("chart").style.display="none";}
	  var mu=document.getElementById("playDiv");
	 if(mu.style.display=='block'){mu.style.display='none';}
	  
	}

   
	 function sss(){
         	document.getElementById("show1").style.display = "block";
		 var p= CKEDITOR.instances.TextArea1.getData();
		 var p1=document.getElementById("p1");
		  var p2=document.getElementById("p2");
   			   p1.innerHTML=p2.innerHTML;
 			   p2.innerHTML=p;
                p="";
 				if(p2.innerHTML!="")
               {p2.style.backgroundColor="#e5004f";
			    var dhk2=document.getElementById("dhk2");
			   dhk2.style.display="inline";}
			  
			   
			    if(p2.innerHTML=="")
				 {var dhk2=document.getElementById("dhk2");
			   dhk2.style.display="none";}
				if(p1.innerHTML!="")
               {p1.style.backgroundColor=" #e5004f";
			   var dhk1=document.getElementById("dhk1");
			   dhk1.style.display="inline";
			   }
			    if(p1.innerHTML=="")
				{var dhk1=document.getElementById("dhk1");
			   dhk1.style.display="none";}
				 var sstop=document.getElementById("show1").offsetTop;
	            var ssleft=document.getElementById("show1").offsetLeft;
		
		
			      var s=document.getElementById("p2").value;
       var b=document.getElementById("xr");
	 	   
			   
				      if(sstop<=-50)
			{  
			document.getElementById("a").style.position = "fixed*absolute"; 
			document.getElementById("show1").style.top = "-80px";
			document.getElementById("show1").style.left = "ssleft";
			}
			 
			 if(ssleft>1200)
			{  
			
			document.getElementById("a").style.position = "fixed*absolute"; 
			 
			document.getElementById("show1").style.top = "sstop";
			document.getElementById("show1").style.left = "980px";
			}
			 bq()
	 
	 }
	 function music(){
 		  var mu=document.getElementById("playDiv");
	 if(mu.style.display=='none'){mu.style.display='block';}
	 else{mu.style.display='none';}
		 
		 
		 
		 
		 }