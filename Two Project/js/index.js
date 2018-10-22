//倒计时
function getTime(obj) {
	setInterval(function() {
		var a = new Date('2018/12/18 00:00:00');
		var b = new Date().getTime();
		var d = 0,
			s = 0,
			h = 0,
			m = 0;
		var is = obj.getElementsByTagName("i")
		d = Math.floor((a - b) / 1000 / 60 / 60 / 24);
		h = Math.floor((a - b) / 1000 / 60 / 60 % 24);
		m = Math.floor((a - b) / 1000 / 60 % 60);
		s = Math.floor((a - b) / 1000 % 60);
		is[0].innerHTML = d;
		is[1].innerHTML = h;
		is[2].innerHTML = m;
		is[3].innerHTML = s;
	}, 0);
}


$(function() {
    $(window).scroll(function() {
        var t = $(this).scrollTop();
        if (t > 300) {
            $(".posi4").stop().fadeIn(300);
        } else {
            $(".posi4").stop().fadeOut(300);
        }
    });
    $(".posi4").click(function() {
        $("body,html").stop().animate({
            scrollTop: 0
        }, 300); //html是为了兼容火狐和IE  
    });
});
