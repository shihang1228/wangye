
CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	 config.language = 'zh-cn';
	//config.uiColor = '#BEFEC1';
	 config.width = 260;
	 config.height = 160;
	 
	 
	//皮肤
	 config.skin='v2';
	 //表情显示每行个数
	 config.smiley_columns =17;
	 //加入代码插件
	 config.extraPlugins="syntaxhighlight"; 
	 //去掉左下角的body和p标签
	 config.removePlugins = 'elementspath';   
	 //表情自定义
	 config.smiley_images  =  ['e100.gif','e101.gif','e102.gif','e103.gif','e104.gif','e105.gif','e106.gif','e107.gif','e108.gif','e109.gif','e110.gif','e111.gif','e112.gif','e113.gif','e114.gif','e115.gif','e116.gif',
	                           
	                           'e117.gif','e118.gif','e119.gif','e120.gif','e121.gif','e122.gif','e123.gif','e124.gif','e125.gif','e126.gif','e127.gif','e128.gif','e129.gif','e130.gif',
	                            
	                           'e131.gif','e132.gif','e133.gif','e134.gif','e135.gif','e136.gif','e137.gif','e138.gif','e139.gif','e140.gif','e141.gif','e142.gif','e143.gif','e144.gif',
	                            
	                           'e145.gif','e146.gif',"e147.gif",'e148.gif','e149.gif','e150.gif','e151.gif','e152.gif','e153.gif','e154.gif','e163.gif','e164.gif','e179.gif','e180.gif','e181.gif','e182.gif','e183.gif','e184.gif','e185.gif','e186.gif','e187.gif','e188.gif','e189.gif'
	                           ];
	  
	 //加入中文
	 config.font_names='宋体/宋体;黑体/黑体;仿宋/仿宋_GB2312;楷体/楷体_GB2312;隶书/隶书;幼圆/幼圆;微软雅黑/微软雅黑;'+ config.font_names;                    //设置编辑器里字体下拉列表里的字体
	  //设置工具栏里面的工具 最主要的
    // config.toolbar =  [['Font','Bold','Italic','Underline','FontSize','TextColor','BGColor','Image','Smiley','Table',
      
    // 'RemoveFormat' ]];

	 config.toolbar =  [['FontSize','TextColor','BGColor','Image','Smiley',
      
     'RemoveFormat' ]];
	                         
	                
};
