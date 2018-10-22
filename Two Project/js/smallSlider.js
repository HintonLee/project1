
var len = $(".list li").length / 5;
console.log(len)
var i = 0;
$(".timer_b_l").click(function() {
    i++;
    if (i >= len) {
        i = 0;
    }
    console.log(i);
    $(".list").animate({
        "margin-left": -i * 1170 + "px"
    }, 500, function() {})
})
$(".time_b_r").click(function() {
    i--;
    console.log(i)
    if (i <= 0) {
        i = len - 1;
    }
    console.log(i);
    $(".list").animate({
        "margin-left": -i * 1170 + "px"
    }, 500, function() {})
})
