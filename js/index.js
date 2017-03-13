/**********************************************************************************
*		姓名：杨明益
*		日期：2017年1月17日
**********************************************************************************/



// 底部信息鼠标滚动事件
$(document).on("mousewheel DOMMouseScroll",function(event){
	if(event.originalEvent.wheelDelta < 0 || event.originalEvent.detail > 0){
		$("footer").addClass("footer");
		$(".tab").css("top","calc(100vh - 170px)");
	}else{
		$("footer").removeClass("footer");
		$(".tab").css("top","calc(100vh - 130px)");
	}
});


// 侧边栏动态效果
$(".nav-more-list li").mouseover(function(){
	var n = $(this).index();
	var top = 116 + n*64 + "px";
	$(".list-style").css("display","block").css("transition","top .15s linear").css("top",top);
});
$(".nav-more-list li").mouseleave(function(){
	$(".list-style").css("display","none").css("top","116px");
});



// tab切换
// 将内容中p标签的上边距保存到数组中
var marginTop = [];
var index = 0,temp = 2,timerBanner,timerLeave;
var showNumber = 0;
for(var i = 0;i < $(".content").length;i++){
	marginTop[i] = parseInt($(".content").eq(i).children("p").css("margin-top"));
}


// 鼠标悬停切换，并且关闭自动轮播

$(".tab a").on("mouseover",function(){
	clearInterval(timerBanner);
	clearInterval(timerLeave);
	// 如果当前显示页面正在动态显示，鼠标再次移动到上面，将跳过{}中的代码
	if($(this).index() != showNumber){
		var n = temp;
		index = $(this).index();
		moveAndShow();
		temp = index;
		showNumber = $(this).index();
	}
});
// 鼠标离开后开启自动轮播
$(".tab a").on("mouseleave",function(){
	timerLeave = setTimeout(function(){
		banner();
	},3000);
});


// 自动轮播
function banner(){
	index = (temp+1)%($(".bg").length);
	showNumber = index;
	moveAndShow();
	temp = index;
	timerBanner = setTimeout(function(){
		banner();
	},5000);
}
banner();

// 内容文字下滑，之后按钮淡出
function moveAndShow(){
	$(".bg").eq(temp).css("opacity","0");
	$(".bg").eq(index).css("opacity","1");
	barMove(index);

	$(".content").eq(temp).css("opacity","0").css("transition","none");
	$(".content").eq(temp).children("p").css("margin-top",marginTop[temp] + "px");
	$(".content").eq(temp).children("p").next().children(".btn").css("opacity","0");
	$(".content").eq(index).css("transition","opacity 1s linear").css("opacity","1");

	setTimeout(function(){
		$(".content").eq(index).children("p").css("margin-top",marginTop[index] + 40 + "px");
		setTimeout(function(){
			console.log($(".content").eq(index).children("p").next().children(".btn"));
			$(".content").eq(index).children("p").next().children(".btn").css("opacity","1");
		},1100);
	},300);
}

// 轮播切换滚动条滑动效果
function barMove(index){
	switch(index){
		case 0:
			$(".active-bar").eq(0).css("left","0");
			break;
		case 1:
			$(".active-bar").eq(0).css("left","76px");
			break;
		case 2:
			$(".active-bar").eq(0).css("left","152px");
			break;
		default:
			break;
	}
}
