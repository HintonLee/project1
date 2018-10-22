//选项卡切换
var cs = getCookie("user1");
//console.log(cs);
$("#yh").bind("click",function(){//bind添加事件
	$("#choose").show();//choose用户
	$("#quick").hide();//快捷登录quick
	$(this).addClass("selet");
	$("#kj").removeClass("select");
	$("#kj").css({
		"border":0,
		"color":"#000"
	})
	$("#yh").css({
		"border-bottom":"2px solid #dc0f50",
		"color":"#dc0f50"
	})
})
$("#kj").bind("click",function(){
	$("#quick").show();
	$("#choose").hide();
	$(this).addClass("selet");
	$("#yh").removeClass("selet");
	$("#kj").css({
		"border-bottom":"2px solid #dc0f50",
		"color":"#dc0f50"
	})
	$("#yh").css({
		"border":0,
		"color":"#000"
	})
})

//用户登录验证    账号验证
$(".cellphone").blur(function(){
	if($(".cellphone").val()==""){
		$("#s1").html("请输入手机号码");
		$(".cellphone").css({
			"border":"1px solid #dc0f50"
		})
		return false;
	}else 
	if(!$(".cellphone").val().match(/^1[35678]\d{9}$/)){
		$("#s1").html("请输入11位有效的手机号码")	;
		return false;
	}else{
		$(".sucess1").css({
			"display":"inline-block"
		})
		$("#s1").html({
			"display":"none"
		})
	}
})

//密码验证
$(".pw").blur(function(){
	if($(".pw").val()==""){
		$("#s1").html("请输入密码");
		$(".pw").css({
			"border":"1px solid #dc0f50"
		})
	}else if(!(/^\w{6,16}$/.test($(".pw").val()))){
		$("#s1").html("请输入6-16位密码");
		$(".sucess2").css({
			"display":"none"
		})
	}else{
		$(".sucess2").css({
			"display":"inline-block"
		})
		$("#s1").html({
			"display":"none"
	});
	}
})
//登录验证
$(".lg").click(function() {
	if($(".cellphone").val() == "" && $(".pw").val() == "") {
		$("#s1").html("账户名和密码不能为空");
		$(".pw").css({
			"border": "1px solid #DC0F50"
		})
		return false;
	} else {
		if($(".cellphone").val() == cs[0][0]) {
			$(".lg").attr({"href": "index.html"});
			setCookie("succ_login","success",7);
		} else {
			$("#ts").html("该账户不存在");
		}
	}
});

//电视用户登录
$(".cp").blur(function(){
	if(!$(".cp").val().match(/^1[35678]\d{9}$/)){
		$(".tvuser").html("请输入11位有效的手机号码");
		$(".tvuser").css({
			"color":"#dc0f50"
		})
	}else{
		$(".tvuser").html("手机号输入正确");
		$(".tvuser").css({
			"color":"green"
		})
	}
})
//图片验证码
$("#picyzm").blur(function(){
	if($("#picyzm").val()==""){
		$(".tvuser").css({
			"color":"#dc0f50"
		})
		$(".tvuser").html("图片验证码不能为空");
	}else if($("#picyzm").val()==$("#v_container").html()){
		$(".tvuser").html("图片验证码正确");
		$(".tvuser").css({
			"color":"green"
		})
		$("#text").css({
			"border":"1px solid #dc0f50"
		})
	}else{
		$(".tvuser").css({
			"color":"#dc0f50"
		})
		$(".tvuser").html("验证码错误，请重新输入")
	}
});


$("#picyzm").next("span").html(checkCode());
$("#v_container").html(checkCode());
$(".change").click(function(){
	$("#picyzm").next("span").html(checkCode());
	return false;
});

//图片验证码随机
$("#v_container").click(function(){
	$(this).html(checkCode()).prev("input").foucs();
	return false;
});

//图片验证码函数
function checkCode(){
	var str="abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789";
	var l = str.length;
	var num1 = str[parseInt(Math.random()*l)];
	var num2 = str[parseInt(Math.random()*l)];
	var num3 = str[parseInt(Math.random()*l)];
	var num4 = str[parseInt(Math.random()*l)];
	var str1 = ""+num1+num2+num3+num4;
	return str1;
}

//短信验证码
$(".cellyzm").blur(function() {

	if($(".cellyzm").val() == 1234) {
		$(".tvuser").html("验证码正确");
		$(".tvuser").css({
			"color": "green",
		})

	} else if($(".cellyzm").val() == "") {
		$(".tvuser").css({
			"color": "red",
		})
		$(".tvuser").html("手机验证码为空");
	}
})

//获取短信验证码
 $(function(){
      var djs=true;
      $("#btn").click (function  () {
          var time=10;
          var $code=$(this);
         if (djs) {
              djs=false;
             var t=setInterval(function(){
                time--;
                 $code.html(time+"秒");
                 if (time==0) {                             
                clearInterval(t);
                $code.html("重新获取");
                    djs=true;
                 }
            },1000)
         }
     })
   });

$(".dl").attr({
	"href":"index.html"
})
function getALLnum() {
	var num = getGoodsCookies(function(_name, obj) {});
	return num;
}
$(".gow").html(getALLnum());





















