// JavaScript Document
/*随屏滚动*/
$(window).scroll(function(){
	if($(window).scrollTop()>163){	
				if($.browser.msie && ($.browser.version == "6.0") && !$.support.style){
						$('.second-right').css({top:function(){
						  return document.documentElement.scrollTop+20;
						   }
						 });	
					}else{
						$('.second-right').css({'position':'fixed','top':'0px'});
					  }
				
		}else if($(window).scrollTop()<=163){
			$('.second-right').css({'position':'absolute','top':'163px'});
		}	
	
	});
	
$(window).scroll(function(){
	if($(window).scrollTop()>566){	
				if($.browser.msie && ($.browser.version == "6.0") && !$.support.style){
						$('.scrollT').css({top:function(){
						  return document.documentElement.scrollTop+20;
						   }
						 });	
					}else{
						$('.scrollT').css({'position':'fixed','top':'0px'});
					  }
				
		}else if($(window).scrollTop()<=566){
			$('.scrollT').css({'position':'absolute','top':'566px'});
		}	
	
	});
	
