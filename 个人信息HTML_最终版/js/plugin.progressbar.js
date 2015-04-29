/**
* 动态进度条插件
* eg:
	$('.progressbar').progressbar({	
		progresswidth:0.5, //0 - 1 之间的数字型
		duration:500 //动画完成时间
	});
* 
* 
*/
(function($){
$.fn.progressbar=function(opts){
	var defaults={
		progresswidth:0, //0 - 100 之间的数字型
		duration:800 //动画完成时间
	};
	var options=$.extend({},defaults,opts);
	if(options.progresswidth < 0 || 
	   options.progresswidth == null || 
	   isNaN(options.progresswidth)){
	   options.progresswidth = 0;
	}else if(options.progresswidth > 100){
		options.progresswidth = 100;	
	}
	if(options.progresswidth == 0){
		$(this).children(0).children(0).css({'border-width':'0px'});
		return false;
	}else{
		$(this).children(0).children(0).css({'border-width':'1px'});
	}
	$(this).children(0).children(0).animate(
		{width:parseInt($(this).children(0).width()) * options.progresswidth / 100},options.duration,
		function(){
			$(this).children(0).html(options.progresswidth + '%');
			if($(this).children(0).width() > $(this).width()){
				$(this).children(0).css({'margin-left':$(this).width() + 3,color:'#000'});
			}	
		});
	}	
	
})(jQuery);