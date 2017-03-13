// 新手分享资料
// 年化收益百分比
var freshmenYearRevenuePercent = ["7%", "7.4%", "7.8%", "8.6%", "10%", "10%", "12%"];
// 年化收益数值 
var freshmenYearRevenueNumber = ["59.452", "82.191", "64.109", "212.05", "82.191", "76.712", "49.315"];
// 迅雷福利 
var freshmenThunderWelfare = ["6", "12", "12", "6", "12", "6", "6"];
// 厂商红包
var freshmenSalerPorket = ["46", "588", "588", "188", "105", "188", "1000"]
// 商品期限
var freshmenDeadline = ["31", "30", "30", "90", "30", "28", "15"];
// 起投金额
var freshmenInvestment = ["2000", "2000", "2000", "1000", "3000", "2000", "5000"];
// 商品名称
var freshmenItemName = ["[金融圈]月盈宝（170109期）", 
	"[利民网]定期宝A170103", 
	"[利民网]定期宝A17010901", 
	"[人人贷]U计划-3月新手标-61期",
	"[君融贷]A股上市企业存货质押融资项目", 
	"[投融家]投融宝-B170109002C", 
	"[向上金服]新手专享可转借款项目集合393期"];
// 商品特点
var freshmenItemAdvantage = ["","低风险,资金安全","","资金安全","","低风险,资金安全",""]

// 加息专区资料
// 年化收益百分比
var addInterestYearRevenuePercent = ["5.9%+1%","7.6%+1%","6%+3%","8%+1%","8%+1%","7%+3%","9.2%+1%","9.5%+1%","10%+1%","8.2%+3%"];
// 年化收益百分比数值
var addInterestYearRevenueNumber = ["145.47","187.39","49.315","131.50","197.26","57.534","453.69","234.24","246.57","67.397"];
// 年化收益迅雷加值s
var addInterestThunder = ["24.657","24.657","24.657","16.438","24.657","24.657","493.315","24.657","24.657","24.657"];
// 产品期限
var addInterestDeadline = ["90","90","30","60","90","30","180","90","90","30"];
// 起投金额
var addInterestInitialInvestment = ["1000","5000","3000","2000","2000","2000","3000","3000","2000","2000"];
// 限投金额
var addInterestLimitInvestment = ["10000","10000","10000","10000","10000","10000","10000","10000","10000","10000"];
// 产品名称
var addInterestItemName = ["[人人贷]U计划-A170109期","[向上金服]向上冲可转借款项目集合195期",
	"[君融贷]A股上市企业存货质押融资项目",
	"[投融家]投融宝-B170109005C",
	"[金融圈]月息宝1号（170108期）",
	"[投融家]经融贷-Y170109008C",
	"[ppmoney]180天月月增[20170109-3]",
	"[君融贷]旅游产业供应链金融",
	"[利民网]车贷宝17010607",
	"[利民网]定期宝Q17010902"];
var addInterestItemAdvantage = ["资金安全","","","低风险,资金安全","","低风险,资金安全","低风险,资金安全","","",""];

// 固定收益资料
// 年化收益
var fixedRevenueYearRevenuePercent = ["7%","7%","7%","9%","9%","9%","9%","9.3%","9.3%","9.3%","9.5%","9.9%","9.9%","9.9%","10%","10%","10.8%","10.8%","11.5%","12%","12%","12%"];
// 年化收益百分比
var fixedRevenueYearRevenueNumber = ["347.12","347.12","347.12","900","900","900","221.91","1391.1","1391.1","1391.1","471.09","1980","1980","1980","410.95","410.95","532.60","532.60","1150","2400","3600","1183.5"]
// 产品期限
var fixedRevenueDeadline = ["181","181","181","365","365","365","90","546","546","546","181","730","730","730","150","150","180","180","365","730","1095","360"];
// 起投金额
var fixedRevenueInitialInvestment = ["1000","1000","1000","1000","1000","1000","2000","1000","1000","2000","1000","1000","1000","2000","2000","3000","3000","2000","2000","2000","3000"];
// 产品名称
var fixedRevenueItemName = ["[人人贷]U计划-B170109-3期",
	"[人人贷]U计划-B170111期",
	"[人人贷]U计划-B170109-2期",
	"[人人贷]U计划-C170111期",
	"[人人贷]U计划-C170111-3期",
	"[人人贷]U计划-C170111-2期",
	"[金融圈]季季盈（170110期）",
	"[人人贷]U计划-C18月-91期",
	"[人人贷]U计划-C18月-91-2期",
	"[人人贷]U计划-C18月-91-3期",
	"[金融圈]月息宝2号（170109期）",
	"[人人贷]U计划-C24月-136-3期",
	"[人人贷]U计划-C24月-136-2期",
	"[人人贷]U计划-C24月-136期",
	"[投融家]投融宝-B170111007C",
	"[投融家]经赢贷-Y170111007A1",
	"[利民网]车贷宝17010708",
	"[利民网]车贷宝17010707",
	"[金融圈]月息宝3号（170110期）",
	"[投融家]随心贷-D170110029",
	"[投融家]购车宝-D170111003",
	"[利民网]定期宝D17011102"];
// 产品特点
var fixedRevenueAdvantage = ["资金安全","资金安全","资金安全","资金安全","资金安全","资金安全","","资金安全","资金安全","资金安全","","资金安全","资金安全","资金安全","低风险,资金安全","低风险,资金安全","","","","低风险,资金安全","低风险,资金安全",""];
function init(){
	// 四个活动对象
	// 开始时进行移动
	var inancialActiveF4Obj = document.querySelectorAll(".inancialActiveF4");
	for(var i=0;i<inancialActiveF4Obj.length;i++){
		inancialActiveF4Obj[i].style.left = 0+"px";
		inancialActiveF4Obj[i].style.transition = "left 0.5s linear "+ (i*0.2) +"s";
	};
	// 三个显示附加信息的对象
	var financialActiveInformation = document.querySelectorAll(".financialActiveInformation");
	for(var i=1;i<inancialActiveF4Obj.length;i++){
		inancialActiveF4Obj[i].index = i; 
		inancialActiveF4Obj[i].onmouseover = function(){
			financialActiveInformation[this.index-1].style.display = "block";
		};
		inancialActiveF4Obj[i].onmouseout = function(){
			financialActiveInformation[this.index-1].style.display = "none";
		};
	};
	var goodsInformationTableObj = document.querySelectorAll("#goodsInformationTable table");
	// 改变表格显示隐藏
	function changeTagleTag(optionNumber){
		for(var i=0;i<goodsInformationTableObj.length;i++){
			goodsInformationTableObj[i].style.display = "none";
		};
		goodsInformationTableObj[optionNumber].style.display = "block";
	};
	// 默认是新手分享
	changeTagleTag(0);

	// 改变表格的信息栏
	function changeTableInformation(optionNumber,RevenuePercent,RevenueNumber,RevenueThunder,ThunderWelfare,SalerPorket,Deadline,Investment,LimitInvestment,ItemName,ItemAdvantage){
		// 显示相应的表格
		changeTagleTag(optionNumber);
		// 商品信息的添加
		// 创建节点对象
		// tr对象
		var trObj = document.createElement("tr");
		trObj.className = "newTr";
		// 年化收益（新手分享，加息专区，年化收益）
		var tdYearRevenue = document.createElement("td");
		tdYearRevenue.className = "yearRevenue";
		if(optionNumber == 0){
			// 新手分享
			var spanPercentObj = document.createElement("span");
			var spanNumberObj = document.createElement("span");
			spanPercentObj.innerHTML = RevenuePercent;
			spanPercentObj.className = "freshmenGoodsYearRevenuePercent";
			spanNumberObj.innerHTML = "万元收益："+RevenueNumber+"元（年化收益）";
			spanNumberObj.className = "freshmenGoodsYearRevenueNumber";
			tdYearRevenue.appendChild(spanPercentObj);
			tdYearRevenue.appendChild(spanNumberObj);
			
		}else if (optionNumber == 1){
			tdYearRevenue.className = "yearRevenue yearRevenueAddInternest";
			// 加息专区
			var bPercentObj = document.createElement("b");
			var spanWordObj = document.createElement("span");
			var divNumberObj = document.createElement("div");
			bPercentObj.innerHTML = RevenuePercent;
			spanWordObj.innerHTML = "迅雷加息";
			spanWordObj.className = "addInternestYearRevenueWord";
			divNumberObj.innerHTML = "万元收益"+ (parseFloat(parseFloat(RevenueNumber).toFixed(3))+parseFloat(parseFloat(RevenueThunder).toFixed(3))).toFixed(3)
				+"元="+RevenueNumber+"元（年化收益）"+"+"+RevenueThunder+"元（迅雷加息收益）";
			divNumberObj.className = "addInternestYearRevenueNumber";
			tdYearRevenue.appendChild(bPercentObj);
			tdYearRevenue.appendChild(spanWordObj);
			tdYearRevenue.appendChild(divNumberObj);
		}else{
			// 年化收益 
			tdYearRevenue.className = "yearRevenue yearRevenuefixedRevenue";
			var spanPercentObj = document.createElement("span");
			var divNumberObj = document.createElement("div");
			spanPercentObj.innerHTML = RevenuePercent;
			spanPercentObj.className = "fixedRevenueYearRevenueWord";
			divNumberObj.innerHTML = "万元收益："+RevenueNumber+"元（年化收益）";
			divNumberObj.className = "fixedRevenueYearRevenueNumber";
			tdYearRevenue.appendChild(spanPercentObj);
			tdYearRevenue.appendChild(divNumberObj);
		};

		trObj.appendChild(tdYearRevenue);

		// 迅雷福利（新手分享）
		if(optionNumber == 0){
			var tdfreshmenThunderWelfareObj = document.createElement("td");
			tdfreshmenThunderWelfareObj.innerHTML = "送"+ThunderWelfare+"个月会员";
			trObj.appendChild(tdfreshmenThunderWelfareObj);
		};
		
		// 厂商红包（新手分享）
		if(optionNumber == 0){
			var tdfreshmenSalerPorketObj = document.createElement("td");
			tdfreshmenSalerPorketObj.innerHTML = SalerPorket+"元";
			trObj.appendChild(tdfreshmenSalerPorketObj);
		};
		// 产品期限（新手分享，加息专区）
		var tdfreshmenDeadlineObj = document.createElement("td");
		tdfreshmenDeadlineObj.innerHTML = Deadline+"天";
		trObj.appendChild(tdfreshmenDeadlineObj);

		// 起投金额（新手分享，加息专区）
		var tdfreshmenInvestmentObj = document.createElement("td");
		tdfreshmenInvestmentObj.innerHTML = Investment+"元";
		trObj.appendChild(tdfreshmenInvestmentObj);

		// 限投金额 （加息专区）
		if(optionNumber == 1){
			var tdInvestmentObj = document.createElement("td");
			tdInvestmentObj.innerHTML = LimitInvestment+"元";
			trObj.appendChild(tdInvestmentObj);
		};
		// 产品名称（新手分享）
		var tdfreshmenItemName = document.createElement("td");
		tdfreshmenItemName.className = "itemName";
		var spanFreshmenItemName = document.createElement("span");
		spanFreshmenItemName.innerHTML = ItemName;
		tdfreshmenItemName.appendChild(spanFreshmenItemName);

		// 产品优势（新手分享，加息专区，固定收益）
		var spanItemAdvantage = document.createElement("span");
		var ItemAdvantageObj = ItemAdvantage.split(",");
		// console.log(ItemAdvantageObj[optionNumber]);
		if(ItemAdvantageObj[optionNumber]!="" && ItemAdvantageObj[optionNumber]!=undefined){
			for(var j=0;j<ItemAdvantageObj.length;j++){
				var emItemAdvantage = document.createElement("em");
				emItemAdvantage.innerHTML =ItemAdvantageObj[j];
				spanItemAdvantage.appendChild(emItemAdvantage);
			};
		};
		tdfreshmenItemName.appendChild(spanItemAdvantage);
		trObj.appendChild(tdfreshmenItemName);

		// VIP与会员（新手分享）
		var tdCompareAndGetVIP = document.createElement("td");
		tdCompareAndGetVIP.className = "compareAndGetVIP";
		var getVIP = document.createElement("span");
		if (optionNumber == 0) {
			getVIP.innerHTML = "投标领会员";
		}else if(optionNumber == 1){
			getVIP.innerHTML = "投标领加息";
		}else{
			getVIP.innerHTML = "立即购买";
		};
			
		tdCompareAndGetVIP.appendChild(getVIP);
		var compare = document.createElement("span");
		compare.innerHTML = "对比";
		compare.className = "freshmenCompare";
		tdCompareAndGetVIP.appendChild(compare);
		trObj.appendChild(tdCompareAndGetVIP);
		goodsInformationTableObj[optionNumber].children[1].appendChild(trObj);
		

	};

	function trMove(){
		// var trObj = document.querySelectorAll(".newTr");
		// for(var i=0;i<trObj.length;i++){
		// 	console.log("ok");
		// 	trObj[i].style.display = "block";
		// 	trObj[i].style.marginLeft = 0+"px";
		// 	trObj[i].style.transition = "margin-left 0.5s linear "+ (i*0.2) +"s";
		// };
	};
	
	// 当前信息总数
	var currentInformationTotal = 0;
	// 当前索引
	var currentIndex = 0;
	// 向表格内传值

	// 新手分享，加息专区，固定收益对象
	var financialOptionObj = document.querySelectorAll(".financialOptionContent");
	// 默认第一项为选中的状态
	financialOptionObj[0].children[0].style.color = '#e41e27';
	// 获得红色下划线的对象
	var underRedLine = document.getElementById("underRedLine");

	// 鼠标hover事件
	for(var i=0;i<financialOptionObj.length;i++){
		financialOptionObj[i].index = i;
			financialOptionObj[i].onmouseover = function(event){
				if (this.index != currentIndex) {
					// 字体颜色
					this.children[0].style.color = '#e41e27';
				};
				// 红色下划线
				if(this.index == 0){
					underRedLine.style.left = 0 + "px";
				}else if(this.index == 1){
					underRedLine.style.left = 238 + "px";
				}else{
					underRedLine.style.left = 476 + "px";
				};
			}
			financialOptionObj[i].onmouseout = function(){
				if (this.index != currentIndex) {
					this.children[0].style.color = '#333';
				};
			};
		
		// 点击选中后变红色
		financialOptionObj[i].onclick = function(){
			for(var i=0;i<financialOptionObj.length;i++){
				financialOptionObj[i].children[0].style.color = '#333';
			};
			this.children[0].style.color = '#e41e27';
			clearTable();
			changeTable(this.index,0,7);
		};		
	};
	
	function changeTable(number,startNumber,endNumber){
		switch(number){
			// 新手分享
			case 0:
			for(var i=startNumber;i<endNumber;i++){
				changeTableInformation(0,
					freshmenYearRevenuePercent[i],
					freshmenYearRevenueNumber[i],
					"",freshmenThunderWelfare[i],
					freshmenSalerPorket[i],
					freshmenDeadline[i],
					freshmenInvestment[i],
					"",freshmenItemName[i],
					freshmenItemAdvantage[i]
				);
			};
			currentIndex = 0;
			currentInformationTotal = freshmenYearRevenuePercent.length;
			changePage(freshmenYearRevenuePercent.length);
			pageSet();
			trMove();
			break;

			case 1:
			for(var i=startNumber;i<endNumber;i++){
				changeTableInformation(1,
					addInterestYearRevenuePercent[i],
					addInterestYearRevenueNumber[i],
					addInterestThunder[i],
					"","",addInterestDeadline[i],
					addInterestInitialInvestment[i],
					addInterestLimitInvestment[i],
					addInterestItemName[i],
					addInterestItemAdvantage[i]
				);
			};
			currentIndex = 1;
			currentInformationTotal = addInterestYearRevenuePercent.length;
			changePage(addInterestYearRevenuePercent.length);
			pageSet();
			trMove();
			break;

			case 2:
			for(var i=startNumber;i<endNumber;i++){
				changeTableInformation(2,
					fixedRevenueYearRevenuePercent[i],
					fixedRevenueYearRevenueNumber[i],
					"","","",fixedRevenueDeadline[i],
					fixedRevenueInitialInvestment[i],
					"",fixedRevenueItemName[i],
					fixedRevenueAdvantage[i]
				);
			};
			currentIndex = 2;
			currentInformationTotal = fixedRevenueYearRevenuePercent.length;
			changePage(fixedRevenueYearRevenuePercent.length);
			pageSet();
			trMove();
			break;
		};
	};

	// 翻页页码
	var changePageBgObj = document.getElementById("turnPageBg");
	function changePage(val){
		var changePageObj = document.getElementById("turnPage");
		// 判断是否出现翻页，创建页码
		if(val>7){
			changePageBgObj.style.display = "block";
			var spanChangePageObj = document.querySelectorAll("#turnPage .changePage");
			// 清除页码
			if(spanChangePageObj.length>0){
				for(var i=0;i<spanChangePageObj.length;i++){
					spanChangePageObj[i].parentNode.removeChild(spanChangePageObj[i]);
				};
			};
			// 设置页码
			for(var i=Math.ceil(val/7);i>0;i--){
				var spanChangePage = document.createElement("span");
				spanChangePage.innerHTML = i;
				spanChangePage.className = "changePage";
				changePageObj.insertBefore(spanChangePage,changePageObj.children[0].nextSibling);
			};
			// 计算项目总数
			changePageObj.children[Math.ceil(val/7)+2].innerHTML = "共"+val+"记录";
		}else{
			changePageBgObj.style.display = "none";
		};
	};

	// 初始化，将新手分享信息导入
	function addInformationTest(){
		changeTable(0,0,7);
		changePage(currentInformationTotal);
	};

	// 加息专区信息测试
	// function addInformationTest(){
		// 索引，初始项，最末项
		// changeTable(1,0,7);
		// changePage(currentInformationTotal);
	// };

	// function addInformationTest(){
	// 	changeTable(2,0,7);
	// 	changePage(currentInformationTotal);
	// };
	addInformationTest();
	
	// 页码绑定
	function pageSet(){
		var changePageObj = document.querySelectorAll(".changePage");
		for(var i=0;i<changePageObj.length;i++){
			changePageObj[i].onmouseover = function(){
				this.style.background = "red";
				this.style.color = "#fff";
			};
			changePageObj[i].onmouseout = function(){
				this.style.background = "#fff";
				this.style.color = "#000";
			};
			changePageObj[i].index = i;
			// 页码切页
			changePageObj[i].onclick = function(){
				var goodsObj = document.querySelectorAll(".newTr");
				// 清除当前内容
				clearTable();
				// 添加新内容
				var maxLength = 0;
				(this.index+1)*7 > currentInformationTotal? maxLength = currentInformationTotal:maxLength = (this.index+1)*7;
				changeTable(currentIndex,this.index*7,maxLength);
				pageSet();
			};
		};
	};
	pageSet();

	// 清除内容 
	// 所有商品对象
	function clearTable(){
		var goodsObj = document.querySelectorAll(".newTr");
		for(var i=0;i<goodsObj.length;i++){
			goodsObj[i].parentNode.removeChild(goodsObj[i]);
		};
	};

	// 更多的按钮绑定
	function moreCondition(){
		// 更多按钮键对象
		var goodsConditionObj = document.querySelector("#goodsConditionBg #more");
		// 筛选条件的对象
		var goodsConditionBgObj = document.querySelectorAll("#goodsConditionBg div");
		// console.log(goodsConditionBgObj);
		var checkGoodsCondition = 0;
		goodsConditionObj.onclick = function(){
			if(checkGoodsCondition == 0){
				for(var i=0;i<goodsConditionBgObj.length;i++){
					goodsConditionBgObj[i].style.display = "block";
				};
				checkGoodsCondition = 1;
			}else{
				for(var i=0;i<goodsConditionBgObj.length;i++){
					goodsConditionBgObj[i].style.display = "none";
				};
				goodsConditionBgObj[0].style.display = "block";
				checkGoodsCondition = 0;
			};
		};
	};
	moreCondition();

	// 鼠标滚轴事件
	var qrCodeObj = document.querySelector("#rightBottomFixed #qrCodeFixed");
	document.body.onmousewheel = function(event){
		var express = document.querySelector("body");
		if(express.scrollTop>600){
			qrCodeObj.style.visibility = "visible";
		}else{
			qrCodeObj.style.visibility = "hidden";
		};
	};

	// document.body.onmousewheel = function(event){
		// 鼠标每次滚动的距离
		// console.log(event.wheelDelta);
		// console.log(event.x);
		// console.log(event.y);
		// console.log(event.screenX);
		// console.log(event.screenY);
		// console.log(event.clientY);
	// 	console.log(event.scrollTop);
	// }
	var loginObj = document.querySelector("#login");
	
	var thunderLoginBgObj = document.querySelector("#thunderLoginBg");
	console.log(thunderLoginBgObj);
	// thunderLoginBgObj.style.visibility = "hidden";
	loginObj.onclick = function(){
		console.log("ok");
		thunderLoginBgObj.style.display = "block";
		// thunderLoginBgObj.style.visibility = "visible";
	};
	
	var closeLoginObj = document.querySelector("#closeLogin");
	console.log(closeLoginObj);
	closeLoginObj.onclick = function(){
		thunderLoginBgObj.style.display = "none";
	};
};
window.onload = init;
