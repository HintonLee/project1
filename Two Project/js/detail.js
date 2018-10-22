
//NAV的显示隐藏
//$(".con_l").hover(function(){
//	$(".list").show();
//	$(".more").show();
//},function(){
//	$(".list").hide();
//	$(".more").hide();
//	
//})
//划过的时候显示
$("#qb").hover(function(){
	$("#list").css({
		"display":"block"
	})
},function(){
	$("#list").css({
		"display":"none"
	})
})
//划过a的时候字体颜色改变   背景色也改变
$("#list li a").hover(function(){
	$(this).css({
		"color":"#fff",
		"background":"#dc0f50"
	})
},function(){
	$(this).css({
		"color":"#000",
		"background":""
	})
})

//点击的时候小图显示边框
$(function(){
	$("#pic_l li").hover(function(){
		$(this).siblings("li").removeClass("selected");
		$(this).addClass("selected");
	})
	
})
$(function(){
	$("#pic_l li").click(function(){
		$(this).siblings("li").removeClass("selected");
		$(this).addClass("selected");
	})
	
})


//图片的切换
var arrUrl = ['img/z1.jpg','img/z2.jpg','img/z3.jpg'];
var oDiv = document.getElementById('content_l');//最大的盒子
var oImg = oDiv.getElementsByTagName('img')[0];//大图
var oUl = oDiv.getElementsByTagName('ul')[0];//小图的ul 
var oLi = oUl.getElementsByTagName('li');//小图中的每个小图


//for (var i = 0; i < arrUrl.length; i++) {
//  oUl.innerHTML += '<li></li>'
//}

//初始化
var num = 0;
oImg.src = arrUrl[num];
oLi[num].className = 'active'
for (var i = 0; i < oLi.length; i++) {
    oLi[i].index = i;
    oLi[i].onclick = function() {
    	
        oImg.src = arrUrl[this.index];
//      console.log(arrUrl[2])
        //上一个清空
        for (var j = 0; j < oLi.length; j++) {
            oLi[j].className = '';
            this.className = 'active';
        }
    }
}

//详细参数选项卡切换
$("#xq").bind("click",function(){
	$(".img").show();
	$(".cs").hide();
	$(this).addClass("active");
	$("#gg").removeClass("active");
})
$("#gg").bind("click",function(){
	$(".cs").show();
	$(".img").hide();
	$(this).addClass("active");
	$("#xq").removeClass("active");
})

//ajax请求json中的图片   点击列表页的那个图片进入相应的详情页
window.onload = function(){
	var str = location.href;
	str = str.split("?")[1];
	var id = str.split("=")[1];
//	console.log(arr);//进行分割得到最后的结果
	$.ajax({
		type:"get",
		url:"json/list.json",
		async:true,
		success:function(data){
			var conStr = '';
			for(i=0;i<data.length;i++){
				var json = data[i]
				if(json.id == id ){
				conStr += `
				<span class="tu" id="tu"><img src="${json.src}" /><img src="${json.src2}" /><img src="${json.src3}" /><img src="${json.src4}" /><img src="${json.src5}" /><img src="${json.src6}" /></span> 
				`;
				//console.log(conStr)//将所有的图片加到span中
				$(".img").append(conStr);
					
				}
				
				
			}
			$("<p style='font-size:14px;margin-left:100px'>家有购物集团股份有限公司</p>").appendTo($('.img'))
		}
	})
}























