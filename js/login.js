function init(){
	// 更多
	var moreBottonObj = document.getElementById("moreBotton");
	var hiddenedOtherLoginObj = document.getElementById("hiddenedOtherLogin");
	var check = 0;
	moreBottonObj.onclick = function(){
		if (check == 0) {
			hiddenedOtherLoginObj.style.display = "block";
			check = 1;
		}else{
			hiddenedOtherLoginObj.style.display = "none";
			check = 0;
		};
	};

	// 账号登录与短信登录
	var loginTagObj = document.querySelectorAll("#loginTag span");
	var accountLoginInputObj = document.querySelector("#accountLoginInput");
	var phoneLoginInputObj = document.querySelector("#phoneLoginInput");
	for(var i=0;i<loginTagObj.length;i++){
		loginTagObj[i].index = i;
		loginTagObj[i].onclick = function(){
			if(this.index==0){
				loginTagObj[0].style.color = "red";
				accountLoginInputObj.style.display = "block";
				console.log("ok");
			}else{
				loginTagObj[0].style.color = "#000";
				accountLoginInputObj.style.display = "none";
			}
			if(this.index==1){
				loginTagObj[1].style.color = "red";
				phoneLoginInputObj.style.display = "block";
			}else{
				loginTagObj[1].style.color = "#000";
				phoneLoginInputObj.style.display = "none";
			};
		};
	};


};
window.onload = init;