// JavaScript Document
$(function(){
		   $(".dressTOne-newtab li").each(function(index){
										 $(this).mouseover(function(){
																$(".dressTOne-newtab li").removeClass("hover")
																$(this).addClass("hover")
																$(".dressTOne-content").removeClass("dis")
																$(".dressTOne-content:eq("+index+")").addClass("dis")	})
										 })
		   })
		   
		   
		   
$(function(){
		   $(".dressTOne-newtab2 li").each(function(index){
										 $(this).mouseover(function(){
																$(".dressTOne-newtab2 li").removeClass("hover")
																$(this).addClass("hover")
																$(".dressTOne-content2").removeClass("dis2")
																$(".dressTOne-content2:eq("+index+")").addClass("dis2")	})
										 })
		   })