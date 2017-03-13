//导航栏
var box_logo=document.querySelectorAll("#head li");
var box_span=document.querySelector("#head #h_icline");
//主体所有li
var box_shadow=document.querySelectorAll(".safelist li");
// console.log(box_shadow)
//获取computer
var computer_box=document.querySelectorAll("#computer .safe_box");//获取computer中的safe_box
var computer_win=document.querySelectorAll("#computer .safe_box .ic_win");//获取computer中的ic_win
var computer_mac=document.querySelectorAll("#computer .safe_box .ic_mac");//获取computer中的ic_mac
//获取phone
var phone_box=document.querySelectorAll("#phone .safe_box");//获取phone中的safe_box
var phone_iph=document.querySelectorAll("#phone .safe_box .ic_iph");//获取phone中的ic_iph
var phone_adt=document.querySelectorAll("#phone .safe_box .ic_adt");//获取phone中的ic_adt
var phone_ipd=document.querySelectorAll("#phone .safe_box .ic_ipd");//获取phone中的ic_ipd
// console.log(phone_box)
// console.log(phone_iph)
// console.log(phone_adt)
// console.log(phone_ipd)
// 

for(var i=0;i<box_logo.length;i++){
	box_logo[i].index=i;
	box_logo[i].onmouseover=function(){
		box_span.style.right=301-this.index*58+"px";
		box_span.style.display="block";
	}
	box_logo[i].onmouseout=function(){
		box_span.style.display="none";
	}
	
} 
// 
// 
// computer按钮下载变色
for(var i=0;i<computer_box.length;i++){
	computer_box[i].index=i;
	computer_box[i].onmouseover=function(){
		if(this.index==0){
			computer_mac[0].style.backgroundPosition="-144px -39px"
			computer_mac[0].parentNode.style.borderColor="#0097ff"
			computer_mac[0].parentNode.style.color="#0097ff"
		}
		computer_win[this.index].style.backgroundPosition="0px -36px"
		computer_win[this.index].parentNode.style.borderColor="#0097ff"
		computer_win[this.index].parentNode.style.color="#0097ff"
	}
	computer_box[i].onmouseout=function(){
		if(this.index==0){
			computer_mac[0].style.backgroundPosition="-144px 2px"
			computer_mac[0].parentNode.style.borderColor="#ccc"
			computer_mac[0].parentNode.style.color="#ccc"
		}
		computer_win[this.index].style.backgroundPosition="0px 0px"
		computer_win[this.index].parentNode.style.borderColor="#ccc"
		computer_win[this.index].parentNode.style.color="#ccc"
	}
}
//phone按钮变色
for(var i=0;i<phone_box.length;i++){
	phone_box[i].index=i;
	phone_box[i].onmouseover=function(){
		if(this.index==0){
			//phone_ipd 按钮
			console.log(123)
			phone_ipd[0].style.backgroundPosition="-110px -36px"
			phone_ipd[0].parentNode.style.borderColor="#0097ff"
			phone_ipd[0].parentNode.style.color="#0097ff"
		}
		//phone_iph 按钮
		phone_iph[this.index].style.backgroundPosition="-32px -35px"
		phone_iph[this.index].parentNode.style.borderColor="#0097ff"
		phone_iph[this.index].parentNode.style.color="#0097ff"
		//phone_adt 按钮
		phone_adt[this.index].style.backgroundPosition="-72px -37px"
		phone_adt[this.index].parentNode.style.borderColor="#0097ff"
		phone_adt[this.index].parentNode.style.color="#0097ff"
	}
	phone_box[i].onmouseout=function(){
		if(this.index==0){
			//phone_ipd 按钮
			phone_ipd[0].style.backgroundPosition="-110px 0px"
			phone_ipd[0].parentNode.style.borderColor="#ccc"
			phone_ipd[0].parentNode.style.color="#ccc"
		}
		//phone_iph 按钮
		phone_iph[this.index].style.backgroundPosition="-32px -2px"
		phone_iph[this.index].parentNode.style.borderColor="#ccc"
		phone_iph[this.index].parentNode.style.color="#ccc"
		//phone_adt 按钮
		phone_adt[this.index].style.backgroundPosition="-72px 2px"
		phone_adt[this.index].parentNode.style.borderColor="#ccc"
		phone_adt[this.index].parentNode.style.color="#ccc"
	}
}
// 按钮背景阴影
for(var i=0;i<box_shadow.length;i++){
	box_shadow.index=i;
	box_shadow[i].onmouseover=function(){
		this.style.boxShadow="0px 0px 50px -5px rgba(0,0,0,0.4)";
	}
	box_shadow[i].onmouseout=function(){
		this.style.boxShadow="";
	}
}