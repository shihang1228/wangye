// JavaScript Document
//1.写结构2. .next实现向左滚动动画3.向左滚动最后一组完成left 0 4.point点对应5..pre 6.修复bug

$(function(){
		   var page=1;//当前页数
		   
		   $(".ure_next").click(function(){
									 if(!$(".ure_videoMove").is(":animated")){//不是处于动画状态
									 if(page==3){//如果到最后一组图时
										 $(".ure_videoMove").animate({left:"0"},1000)//让left为0
										 page=1;
										 }else{
									 $(".ure_videoMove").animate({left:"-=220px"},1000)
									 page++;//页数增加
									 }
									 }//处于非动画时，才能产生新的动画
									 $(".point span:eq("+(page-1)+")").addClass("pointActive").siblings().removeClass("pointActive")//找到对应的添加class名，之后将siblings同辈节点的class名删除
									 })//next click
		   $(".ure_pre").click(function(){
									if(!$(".ure_videoMove").is(":animated")){
									if(page==1){
										$(".ure_videoMove").animate({left:"-440px"},1000)
										page=3;
										}else{
											$(".ure_videoMove").animate({left:"+=220px"},1000)
											page--;
											}
											}
									$(".point span:eq("+(page-1)+")").addClass("pointActive").siblings().removeClass("pointActive")//找到对应的添加class名，之后将siblings同辈节点的class名删除
									})
		   
		   
		   /*滑过时出现放大镜*/
		   $(".videoMove dt").each(function(){
											$(this).mouseover(function(){
																	   $(".img").remove()
														 $(this).append('<span class="img"><img src="images/zoom.gif" width="32" height="32"></span>')
																	   }).mouseout(function(){
																		 $(".img").remove()  
																		   })
											})
		   })




























