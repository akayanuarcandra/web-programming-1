/* 顶部导航下拉 */
$("#nav ul").parent().hover(function(){
	$(this).addClass("current").find("ul").show().parent().siblings().removeClass("current").find("ul").hide("fast");
},function(){
	$(this).removeClass("current").find("ul").hide();
}); 


/* 左侧目录下拉 */
$("#menus ul").parent().click(function(){
	if($(this).hasClass("current")){
		$(this).removeClass("current").find("ul").hide();		
	}else{
		$(this).addClass("current").find("ul").show().parent().siblings().removeClass("current").find("ul").hide();
	}
}); 