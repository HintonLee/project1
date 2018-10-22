//鼠标的移入显示移出隐藏
$("#smallbox").mouseenter(function(){
	$("#bigbox").show();
	$(".float_layer").show();
})
$("#smallbox").mouseout(function(){
	$("#bigbox").hide();
	$(".float_layer").hide();
})

$(".mask").mousemove(function(e){
	var lt = e.pageX - $("#smallbox").offset().left - ($(".float_layer").width()/2);
	var tp = e.pageY - $("#smallbox").offset().top - ($(".float_layer").height()/2);
	if(lt<0){
		lt = 0;
	}
	if(lt > $(this).width() - $(".float_layer").width()){
		lt =  $(this).width() - $(".float_layer").width();
	}
	if(tp < 0){
		tp = 0;
	}
	if(tp > $(this).height() - $(".float_layer").height()){
		tp = $(this).height() - $(".float_layer").height();
	}
	$(".float_layer").css({
		"left":lt,
		"top":tp
	})
	
	//大图
	var pX = lt / ($(".mask").width() - $(".float_layer").width());
	var pY = tp / ($(".mask").height() - $(".float_layer").height());
	$("#bigbox img").css({
		"left":-pX * ($("#bigbox img").width() - $("#bigbox").width()),
		"top": -pY * ($("#bigbox img").width() - $("#bigbox").width())
	})
})















