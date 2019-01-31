$(function(){
	var div,i = 0;
	var index = -1;
	var img,span,a,atext,context,color,src;
	var timer;
	//轮播点击事件
	$("ol li").click(function(){
		//点击赋值
		index = $(this).attr("data-slide-to");
		index = parseInt(index);
	});
	//轮播切换前事件
	$("#carousel-example-generic").on('slide.bs.carousel',function(){
		//先执行
		if(index < 0){
			index = parseInt($(this).find(".active").attr("data-slide-to"));
			index += 1;
		}
		cycle(index);
	});
	//轮播切换后事件
	$("#carousel-example-generic").on('slid.bs.carousel',function(){
		//后执行	
		cycle(index);
		index = -1;
	});
	//导航条进入事件
	$("#Nav-Item span").mouseenter(function(){
		img = $(this).find("img");
		span = $(this)[0];
		a = $(this).find("a");
		atext = a.text();
		context = $("#Nav-Text");
		//执行事件
		mover(span,context,atext,color,src,a,img);
		
	});
	//进入导航-内容事件
	$(".Nav-Content").mouseenter(function(){
		mover(span,context,atext,color,src,a,img);
	});
	//离开导航-内容事件
	$(".Nav-Content").mouseleave(function(){
		mout(span,a,atext,img,context);
	});
	//导航条离开事件
	$("#Nav-Item span").mouseleave(function(){	
		mout(span,a,atext,img,context);
	});
	//图片进入
	$("#Content-Show img").mouseenter(function(){
		$(this)[0].style.opacity = "0.8";
	});
	//图片离开
	$("#Content-Show img").mouseleave(function(){
		$(this)[0].style.opacity = "1";
	});
	//品牌图进入
	$("#Content-Brand .Brand-Black").mouseenter(function(){
		$(this)[0].style.opacity = "0.9";
	});
	//品牌图离开
	$("#Content-Brand .Brand-Black").mouseleave(function(){
		$(this)[0].style.opacity = "0";
	});
	//进入品牌图换一批
	$("#Block-Tail").mouseenter(function(){
		$(this).find("img")[0].style.WebkitAnimation = "rotateImg 1s";
		$("#Dimg img")[0].style.visibility = "hidden";
		$("#Dimg span")[0].style.visibility = "hidden";
	});
	//离开品牌图换一批
	$("#Block-Tail").mouseleave(function(){
		$(this).find("img")[0].style.WebkitAnimation = "";
		$("#Dimg img")[0].style.visibility = "visible";
		$("#Dimg span")[0].style.visibility = "visible";
	});
	//天猫超市
	$(".Content-Supermarket a").mouseenter(function(){
		$(this)[0].style.borderBottom = "1px solid black";
	});
	$(".Content-Supermarket a").mouseleave(function(){
		$(this)[0].style.borderBottom = "0px solid black";
	});
	//今日疯抢定时器
	timer = setInterval(function(){
		div = $("#BigImg-Classify");
		div.find("span")[i].style.backgroundColor = "rgb(0,178,98)";
		div.find("span")[i].style.color = "white";
		$(div.find("span")[i]).siblings("span")[0].style.backgroundColor = "rgb(241,241,241)";
		$(div.find("span")[i]).siblings("span")[0].style.color = "black";
		if(i == 0){
			div.children("img").attr("src","page/contentphoto/TB1Iza1yQvoK1RjSZFDXXXY3pXa-400-400.jpg");
			div.find("b").text("超能洗衣液套装");
			div.find("p").text("前1分首件5折");
			i++;
		}else if(i == 1){
			div.children("img").attr("src","page/contentphoto/TB1cHjNgOrpK1RjSZFhXXXSdXXa-400-400.jpg");
			div.find("b").text("限时限量疯抢");
			div.find("p").text("1元超值疯抢中");
			i = 0;
		}
	},3000);
	//今日疯抢
	$("#BigImg-Classify span").mouseenter(function(){
		div = $(this).parent();
		i = parseInt($(this).attr("index"));
		showtime(div,i);
		clearInterval(timer);
	});
	//今日疯抢离开启动定时器
	$("#BigImg-Classify span").mouseleave(function(){
		timer = setInterval(function(){
			div = $("#BigImg-Classify");
			div.find("span")[i].style.backgroundColor = "rgb(0,178,98)";
			div.find("span")[i].style.color = "white";
			$(div.find("span")[i]).siblings("span")[0].style.backgroundColor = "rgb(241,241,241)";
			$(div.find("span")[i]).siblings("span")[0].style.color = "black";
			if(i == 0){
				div.children("img").attr("src","page/contentphoto/TB1Iza1yQvoK1RjSZFDXXXY3pXa-400-400.jpg");
				div.find("b").text("超能洗衣液套装");
				div.find("p").text("前1分首件5折");
				i++;
			}else if(i == 1){
				div.children("img").attr("src","page/contentphoto/TB1cHjNgOrpK1RjSZFhXXXSdXXa-400-400.jpg");
				div.find("b").text("限时限量疯抢");
				div.find("p").text("1元超值疯抢中");
				i = 0;
			}
		},3000);
	});
	//鼠标进入产品边框颜色改变
	$(".BigImg-Product").mouseenter(function(){
		$(this)[0].style.border = "1px solid rgb(255,0,54)";
	});
	//鼠标离开产品边框颜色改变
	$(".BigImg-Product").mouseleave(function(){
		$(this)[0].style.border = "";
	});
	//鼠标滚轮事件
	var colour ;
	var block ;
	$(document).scroll(function(){
		if($(this).scrollTop() >= 500){
			$("#Content").slideDown();
			$("#Context-Nav").fadeIn(500);
		}else{
			$("#Content").slideUp();
			$("#Context-Nav").fadeOut(500);
		}

		if($(this).scrollTop() >= 707 && $(this).scrollTop() < 1389){
			block = $("#Context-Nav span")[0];
			colour = "rgb(100,195,51)";
		}else if($(this).scrollTop() >= 1389 && $(this).scrollTop() < 2150){
			block = $("#Context-Nav span")[1];
			colour = "rgb(255,0,54)";
		}else if($(this).scrollTop() >= 2150 && $(this).scrollTop() < 2832){
			block = $("#Context-Nav span")[2];
			colour = "rgb(234,95,141)";
		}else if($(this).scrollTop() >= 2832 && $(this).scrollTop() < 3514){
			block = $("#Context-Nav span")[3];
			colour = "rgb(10,166,232)";
		}else if($(this).scrollTop() >= 3514 && $(this).scrollTop() < 4196){
			block = $("#Context-Nav span")[4];
			colour = "rgb(100,195,51)";
		}else if($(this).scrollTop() >= 4196 && $(this).scrollTop() < 4878){
			block = $("#Context-Nav span")[5];
			colour = "rgb(241,84,83)";
		}else if($(this).scrollTop() >= 4878 && $(this).scrollTop() < 5560){
			block = $("#Context-Nav span")[6];
			colour = "rgb(25,200,169)";
		}else if($(this).scrollTop() >= 5560){
			block = $("#Context-Nav span")[7];
			colour = "rgb(255,0,54)";
		}
		block.style.backgroundColor = colour;
		changeColor(block);
	});
	//登录框选中颜色
	$("#Login-Box input").focus(function(){
		$(this).parent()[0].style.border = "2px solid rgb(166,200,255)";
	});
	//登录框离开颜色
	$("#Login-Box input").blur(function(){
		$(this).parent()[0].style.border = "2px solid rgb(203,203,203)";
	});
	//评价点击事件
	$("#Product-Evaluation li").click(function(){
		$(this)[0].style.border = "2px solid rgb(207,191,177)";
		$(this)[0].style.borderTop = "2px solid rgb(255,0,54)";
		$(this)[0].style.borderBottom = "2px solid transparent";
		$(this).find("a")[0].style.color = "rgb(255,0,54)";
		$(this).find("span")[0].style.display = "block";
		$(this).siblings("li")[0].style.border = "2px solid transparent";
		$(this).siblings("li")[0].style.borderTop = "2px solid transparent";
		$(this).siblings("li").find("a")[0].style.color = "black";
		$(this).siblings("li").find("span")[0].style.display = "none";
	});
	//产品图切换事件
	$("#Product-Img span img").mouseenter(function(){
		var path = $(this).attr("src");
		$("#Product-Img #Show-Img").attr("src",path);
		$(this)[0].style.border = "2px solid black";
	});
	$("#Product-Img span img").mouseleave(function(){
		$(this)[0].style.border = "2px solid transparent";
	});
	//分类产品进入事件
	$("#Classify-Product .Product-Content").mouseenter(function(){
		$(this)[0].style.border = "3px solid rgb(255,0,54)";
	});
	$("#Classify-Product .Product-Content").mouseleave(function(){
		$(this)[0].style.border = "3px solid transparent";
	});
	//购物车勾选框事件
	var select = $(".Select");	//全部
	var check = $(".Check-All");//全选框
	var radio = $(".Radio");	//单选框
	var count = 0;		//选中框数量
	var totle = 0;		//一共多少件商品
	var sum = 0;		//总金额
	//全选事件
	$(".Check-All").click(function(){
		//全选图片判断
		if($(this).find("img").attr("select") == "false"){
			for (var i = 0; i < select.length; i++) {
				$(select[i]).find("img").attr("select","true");
				$(select[i]).find("img").attr("src","page/iocn/cartSelected.png");
			}
			//全选总金额和数量增加
			totle = 0;
			sum = 0;
			for (var i = 0; i < radio.length; i++) {
				sum += parseFloat($(".Content-Sum")[i].innerHTML);
				totle += parseInt($(".Shopcart-Content").eq(i).find("input").eq(1).prop("value"));
			}
			count = radio.length;
		//全选图片判断
		}else if($(this).find("img").attr("select") == "true"){
			for (var i = 0; i < select.length; i++) {
				$(select[i]).find("img").attr("select","false");
				$(select[i]).find("img").attr("src","page/iocn/cartNotSelected.png");
			}
			//全选总金额和数量减少
			for (var i = 0; i < radio.length; i++) {
				sum = 0;
				totle = 0;
			}
			count -=radio.length;
		}
		//全选结算按钮设置
		if(count > 0){
			for (var i = 0; i < 2; i++) {
				$(".Shopcart-Commit")[i].style.backgroundColor = "rgb(255,0,54)";
				$(".Shopcart-Commit")[i].removeAttribute("disabled");
			}	
		}else{
			for (var i = 0; i < 2; i++) {
				var disabled =  document.createAttribute("disabled");
				disabled.nodeValue = "disabled";
				$(".Shopcart-Commit")[i].style.backgroundColor = "rgb(170,170,170)";
				$(".Shopcart-Commit")[i].setAttributeNode(disabled);
			}	
		}
		//全选总金额设置
		for (var i = 0; i < 2; i++) {
			$(".Shopcart-Sum")[i].innerHTML = sum.toFixed(2);
		}
		//全选数量设置
		$("#Shopcart-Pay div strong")[0].innerHTML = totle;
		
	});
	//单选事件
	$(".Radio").click(function(){
		//单选图片更换判断
		if($(this).find("img").attr("select") == "false"){
			$(this).find("img").attr("select","true");
			$(this).find("img").attr("src","page/iocn/cartSelected.png");
			//单选总金额和数量增加
			totle = 0;
			sum = 0;
			for (var i = 0; i < radio.length; i++) {
				//如果勾选框为true则相加
				if($($(".Radio")[i]).find("img").attr("select") == "true"){
					sum += parseFloat($(".Content-Sum")[i].innerHTML);
					totle += parseInt($(".Shopcart-Content").eq(i).find("input").eq(1).prop("value"));
				}
			}
			count++;
		//单选图片更换判断
		}else if($(this).find("img").attr("select") == "true"){
			$(this).find("img").attr("select","false");
			$(this).find("img").attr("src","page/iocn/cartNotSelected.png");
			//单选总金额和数量减少
			totle = 0;
			sum = 0;
			for (var i = 0; i < radio.length; i++) {
				//如果勾选框为true则相加
				if($($(".Radio")[i]).find("img").attr("select") == "true"){
					sum += parseFloat($(".Content-Sum")[i].innerHTML);
					totle += parseInt($(".Shopcart-Content").eq(i).find("input").eq(1).prop("value"));
				}
			}
			count--;
		}
		
		//单选图片更换判断
		if(count == radio.length){
			for (var i = 0; i < check.length; i++) {
				$(check[i]).find("img").attr("select","true");
				$(check[i]).find("img").attr("src","page/iocn/cartSelected.png");
			}
		}else if(count < radio.length){
			for (var i = 0; i < check.length; i++) {
				$(check[i]).find("img").attr("select","false");
				$(check[i]).find("img").attr("src","page/iocn/cartNotSelected.png");
			}
		}
		//单选结算按钮设置
		if(count > 0){
			for (var i = 0; i < 2; i++) {
				$(".Shopcart-Commit")[i].style.backgroundColor = "rgb(255,0,54)";
				$(".Shopcart-Commit")[i].removeAttribute("disabled");
			}	
		}else{
			for (var i = 0; i < 2; i++) {
				var disabled =  document.createAttribute("disabled");
				disabled.nodeValue = "disabled";
				$(".Shopcart-Commit")[i].style.backgroundColor = "rgb(170,170,170)";
				$(".Shopcart-Commit")[i].setAttributeNode(disabled);
			}	
		}
		//单选总金额设置
		for (var i = 0; i < 2; i++) {
			$(".Shopcart-Sum")[i].innerHTML = sum.toFixed(2);
		}
		//单选数量设置
		$("#Shopcart-Pay div strong")[0].innerHTML = totle;
	});
	//购物车增加按钮事件
	$(".Shopcart-Content p").click(function(){
		var num = parseInt($(this).siblings("input").eq(1).prop("value"));	//单件产品数量
		var price = parseFloat($(this).siblings("strong")[1].innerHTML);	//单件产品单价
		//按钮增减判断
		if(isNaN(num) == true){
			$(this).siblings("input").eq(1).prop("value",0);
			totle = 0;
			for (var i = 0; i < radio.length; i++) {
				if($($(".Radio")[i]).find("img").attr("select") == "true"){
					totle += parseInt($(".Shopcart-Content").eq(i).find("input").eq(1).prop("value"));
				}
			}
		}else if($(this).text() == "+"){
			totle += 1;
			$(this).siblings("input").eq(1).prop("value",num += 1);
		}else if($(this).text() == "-"){
			if(num > 0){
				totle -= 1;
				$(this).siblings("input").eq(1).prop("value",num -= 1);
			}else{
				$(this).siblings("input").eq(1).prop("value",0);
				totle = 0;
				for (var i = 0; i < radio.length; i++) {
					if($($(".Radio")[i]).find("img").attr("select") == "true"){
						totle += parseInt($(".Shopcart-Content").eq(i).find("input").eq(1).prop("value"));
					}
				}
			}
		}
		//单件产品总金额设置
		if(isNaN(num) == true){
			$(this).siblings("strong")[3].innerHTML = (0).toFixed(2);
		}else{
			$(this).siblings("strong")[3].innerHTML = (num * price).toFixed(2);
		}
		//全部产品总金额设置
		if($(this).siblings("a").find("img").attr("select") == "true"){
			sum = 0;
			totle = 0;
			for (var i = 0; i < radio.length; i++) {
				//如果勾选框为true则相加
				if($($(".Radio")[i]).find("img").attr("select") == "true"){
					sum += parseFloat($(".Content-Sum")[i].innerHTML);
					totle += parseInt($(".Shopcart-Content").eq(i).find("input").eq(1).prop("value"));
				}
			}
			for (var i = 0; i < 2; i++) {
				$(".Shopcart-Sum")[i].innerHTML = sum.toFixed(2);
			}
			$("#Shopcart-Pay div strong")[0].innerHTML = totle;
		}
	});
	//购物车输入框修改事件
	$(".Shopcart-Content input").keyup(function(){
		var num = parseInt($(this).prop("value"));			//单件产品数量
		var price = parseFloat($(this).siblings("strong")[1].innerHTML);		//单件产品单价
		//输入框数据更新金额
		if(isNaN(num) == false){
			$(this).siblings("strong")[3].innerHTML = (num * price).toFixed(2);
		}else{
			$(this).siblings("strong")[3].innerHTML = (0).toFixed(2);
		}
		//输入框总金额设置
		if($(this).siblings("a").find("img").attr("select") == "true"){
			sum = 0;
			totle = 0;
			for (var i = 0; i < radio.length; i++) {
				//如果勾选框为true则相加
				if($($(".Radio")[i]).find("img").attr("select") == "true"){
					sum += parseFloat($(".Content-Sum")[i].innerHTML);
					totle += parseInt($(".Shopcart-Content").eq(i).find("input").eq(1).prop("value"));
				}
			}
			for (var i = 0; i < 2; i++) {
				$(".Shopcart-Sum")[i].innerHTML = sum.toFixed(2);
			}
			$("#Shopcart-Pay div strong")[0].innerHTML = totle;
		}
	});
	//购物车点击删除事件
	var deleteShopcart ;
	$(".remove").click(function(){
		deleteShopcart = $(this).parents(".Shopcart-Content");	
	});
	$(document).on('click','#Tmall-Shopcart .btn-primary',function(){
		var id = deleteShopcart.find("input").first().val();
		$.post("deleteShopcart",{"id":id});
		deleteShopcart.remove();
		sum = 0;
		totle = 0;
		count--;
		for (var i = 0; i < radio.length; i++) {
			//如果勾选框为true则相加
			if($($(".Radio")[i]).find("img").attr("select") == "true"){
				sum += parseFloat($(".Content-Sum")[i].innerHTML);
				totle += parseInt($(".Shopcart-Content").eq(i).find("input").eq(1).prop("value"));
			}
		}
		for (var i = 0; i < 2; i++) {
			$(".Shopcart-Sum")[i].innerHTML = sum.toFixed(2);
		}
		$("#Shopcart-Pay div strong")[0].innerHTML = totle;
		if(totle == 0){
			for (var i = 0; i < 2; i++) {
				var disabled =  document.createAttribute("disabled");
				disabled.nodeValue = "disabled";
				$(".Shopcart-Commit")[i].style.backgroundColor = "rgb(170,170,170)";
				$(".Shopcart-Commit")[i].setAttributeNode(disabled);
			}	
		}
		if(count == 0){
			for (var i = 0; i < select.length; i++) {
				$(select[i]).find("img").attr("select","false");
				$(select[i]).find("img").attr("src","page/iocn/cartNotSelected.png");
			}
		}
	});
	//订单页面
	$("#Tmall-Order .tab-pane .Pane-Content").mouseenter(function(){
		$(this)[0].style.border = "2px solid rgb(170,170,170)";
	});
	$("#Tmall-Order .tab-pane .Pane-Content").mouseleave(function(){
		$(this)[0].style.border = "2px solid transparent";
	});
	$("#Tmall-Order .nav-tabs li").click(function(){
		var siblings = $(this).siblings("li");
		$(this)[0].style.borderBottom = "2px solid rgb(255,0,54)";
		$(this).find("a")[0].style.color = "rgb(255,0,54)";
		for (var i = 0; i < siblings.length; i++) {
			siblings[i].style.borderBottom = "2px solid transparent";
			$(siblings[i]).find("a")[0].style.color = "black";
		}
	});
	//订单点击删除事件
	var deleteOrder;
	var deleteOrderAll;
	var deleteOrderId;
	$("#Tmall-Order .del").click(function(){
		deleteOrder = $(this).parents(".Pane-Content");
		deleteOrderId = $(this).siblings("input").val();
		for (var i = 0; i < $("#Order-All .Pane-Content").length; i++) {
			if($("#Order-All .Pane-Content").eq(i).find(".Order-Content-Head").find("input").val() == deleteOrderId){
				deleteOrderAll = $("#Order-All .Pane-Content").eq(i);
			}
		}
	});
	$(document).on('click','#Tmall-Order .btn-primary',function(){
		$.post("deleteOrder",{"order.id":deleteOrderId});
		deleteOrder.remove();
		deleteOrderAll.remove();
	});
	
	//产品页面点击按钮增加数量
	$("#Product-Describe button").first().click(function(){
		var num = parseInt($(this).siblings("input").prop("value"));
		$(this).siblings("input").prop("value",num+=1);
		$("#Describe-Button input").first().prop("value",num);
	});
	$("#Product-Describe button").eq(1).click(function(){
		var num = parseInt($(this).siblings("input").prop("value"));
		if(num <= 1){
			$(this).siblings("input").prop("value",1);
		}else{
			$(this).siblings("input").prop("value",num-=1);
		}
		$("#Describe-Button input").first().prop("value",num);
	});
	//验证用户名
	var userName = "";
	var user;
	$("#Register-Box #Box-User").keyup(function(){
		userName = $(this).val();
     	$.post("checkName",{"username":userName},function(date){
     		user = date;
     		$("#checkResult span").attr("class",date);
     	});
     	if(userName == ""){
     		$("#checkResult")[0].style.visibility = "hidden";
     	}else{
     		$("#checkResult")[0].style.visibility = "visible";
     	}
     	
	});
	//验证密码不同
	var password1 = "";
	var password2 = "";
	$("#Register-Box #Box-Password input").blur(function(){
		$(this).siblings("span")[0].style.visibility = "visible";
		password1 = $("#Register-Box #Box-Password input")[0].value;
		password2 = $("#Register-Box #Box-Password input")[1].value;
		if(password1 !== password2){
			$("#Box-Password #Password-Tip1").attr("class","glyphicon glyphicon-remove-sign");
			$("#Box-Password #Password-Tip2").attr("class","glyphicon glyphicon-remove-sign");
		}else{
			$("#Box-Password #Password-Tip1").attr("class","glyphicon glyphicon-ok-sign");
			$("#Box-Password #Password-Tip2").attr("class","glyphicon glyphicon-ok-sign");
		}
	});
	//注册账号密码提交事件
	$("#Register-Box form").submit(function(){
		if(userName == "" || password1 == "" || password2 == ""){
			alert("账号密码不能为空");
			return false;
		}else if(password1 !== password2){
			alert("两次输入的密码不同");
			return false;
		}else if(user == "glyphicon glyphicon-remove-sign"){
			alert("账号已存在");
			return false;
		}
	});
	//账号退出事件
	$("#Tmall-Nav a").eq(2).click(function(){
		if($(this).text() == "退出"){
			$(this).attr("href","out");
		}else if($(this).text() == "免费注册"){
			$(this).attr("href","registerPage");
		}
	});
	//页尾点击事件
	$("#Tmall-Tail a").click(function(){
		alert("此页面暂未开放");
	});
	$("#Tmall-Copyright a").click(function(){
		alert("此页面暂未开放");
	});
	//点击进入产品页面
	$(".Supermarket-BigImg .BigImg-Product").click(function(){
		var id = $(this).find("input").attr("value");
		$(this).parent().attr("href","product?id="+id);
	});
	//加入购物车事件
	$("#Describe-Button button").last().click(function(){
		if($("#Tmall-Nav a").eq(2).text() == "退出"){
			var id = $("#Describe-Button input").last().attr("value");
			var num = $("#Describe-Button input").first().attr("value");
			$.get("addShopcart",{"id":id,"num":num});
			$(this).attr("disabled","disabled");
			$(this)[0].style.backgroundColor = "rgb(170,170,170)";
			$(this)[0].style.border = "1px solid rgb(170,170,170)";
		}else{
			window.location.reload("loginPage");
		}
	});
	
	//结算事件
	$(".Shopcart-Commit").click(function(){
		for (var i = 0; i < $(".Shopcart-Content").length; i++) {
			if($(".Shopcart-Content").eq(i).find("img").eq(0).attr("select") == "false"){
				 $(".Shopcart-Content").eq(i).find("input").eq(0).removeAttr("name");
			}
		}
	});
	//提醒卖家发货
	$("#Tmall-Order .tab-pane button").click(function(){
		if($(this).text() == "提醒卖家发货"){
			alert("已经提醒卖家尽快发货");
		}
	});
	
	
	
	
});


//导航条颜色
function changeColor(block){
	$(function(){
		for (var i = 0; i < 7; i++) {
			$(block).siblings("span")[i].style.backgroundColor = "rgb(98,98,98)";
		}
	});
}

//定时器封装
function showtime(div,i){
	$(function(){
		div = $("#BigImg-Classify");
		div.find("span")[i].style.backgroundColor = "rgb(0,178,98)";
		div.find("span")[i].style.color = "white";
		$(div.find("span")[i]).siblings("span")[0].style.backgroundColor = "rgb(241,241,241)";
		$(div.find("span")[i]).siblings("span")[0].style.color = "black";
		if(i == 0){
			div.children("img").attr("src","page/contentphoto/TB1Iza1yQvoK1RjSZFDXXXY3pXa-400-400.jpg");
			div.find("b").text("超能洗衣液套装");
			div.find("p").text("前1分首件5折");
			i++;
		}else if(i == 1){
			div.children("img").attr("src","page/contentphoto/TB1cHjNgOrpK1RjSZFhXXXSdXXa-400-400.jpg");
			div.find("b").text("限时限量疯抢");
			div.find("p").text("1元超值疯抢中");
			i = 0;
		}
	})
}

//鼠标进入导航条函数封装
function mover(span,context,atext,color,src,a,img){
	$(function(){
		span.style.backgroundColor = "white";
		span.style.opacity = "1";
		context[0].style.visibility = "visible";
		if(atext == "女装/内衣"){
			color = "#d4237a";
			src = "page/iocn/hover/girld4237a.png";
			context.find(".Context-One")[0].style.display = "block";
		}else if(atext == "男装/运动户外"){
			color = "#1296db";
			src = "page/iocn/hover/boy1296db.png";
			context.find(".Context-Two")[0].style.display = "block";
		}else if(atext == "女鞋/男鞋/箱包"){
			color = "#82529d";
			src = "page/iocn/hover/shoes82529d.png";
			context.find(".Context-Three")[0].style.display = "block";
		}else if(atext == "美妆/个人护理"){
			color = "#db639b";
			src = "page/iocn/hover/makeupdb639b.png";
			context.find(".Context-Four")[0].style.display = "block";
		}else if(atext == "腕表/眼镜/珠宝饰品"){
			color = "#82529d";
			src = "page/iocn/hover/jewelry82529d.png";
			context.find(".Context-Five")[0].style.display = "block";
		}else if(atext == "手机/数码/电脑办公"){
			color = "#1296db";
			src = "page/iocn/hover/phone1296db.png";
			context.find(".Context-Six")[0].style.display = "block";
		}else if(atext == "母婴玩具"){
			color = "#e0620d";
			src = "page/iocn/hover/toye0620d.png";
			context.find(".Context-Seven")[0].style.display = "block";
		}else if(atext == "零食/茶酒/进口食品"){
			color = "#efb336";
			src = "page/iocn/hover/foodefb336.png"
			context.find(".Context-Eight")[0].style.display = "block";
		}else if(atext == "生鲜水果"){
			color = "#efb336";
			src = "page/iocn/hover/fruitefb336.png";
			context.find(".Context-Nine")[0].style.display = "block";
		}else if(atext == "大家电/生活电器"){
			color = "#1296db";
			src = "page/iocn/hover/appliances1296db.png";
			context.find(".Context-Ten")[0].style.display = "block";
		}else if(atext == "家具建材"){
			color = "#d81e06";
			src = "page/iocn/hover/furnitured81e06.png";
			context.find(".Context-Eleven")[0].style.display = "block";
		}else if(atext == "汽车/配件/用品"){
			color = "#1296db";
			src = "page/iocn/hover/car1296db.png";
			context.find(".Context-Twelve")[0].style.display = "block";
		}else if(atext == "家纺/家饰/鲜花"){
			color = "#efb336";
			src = "page/iocn/hover/textileefb336.png";
			context.find(".Context-Thirteen")[0].style.display = "block";
		}else if(atext == "医药保健"){
			color = "#36ab60";
			src = "page/iocn/hover/medicine36ab60.png";
			context.find(".Context-Fourteen")[0].style.display = "block";
		}else if(atext == "厨具/收纳/宠物"){
			color = "#d81e06";
			src = "page/iocn/hover/homed81e06.png";
			context.find(".Context-Fifteen")[0].style.display = "block";
		}else if(atext == "图书音像"){
			color = "#36ab60";
			src = "page/iocn/hover/book36ab60.png";
			context.find(".Context-Sixteen")[0].style.display = "block";
		}
		a[0].style.color = color;
		img.attr("src",src);
	});
}

//鼠标离开导航条函数封装
function mout(span,a,atext,img,context){
	$(function(){
		span.style.backgroundColor = "black";
		span.style.opacity = "0.8";
		a[0].style.color = "white";
		if(atext == "女装/内衣"){
			img.attr("src","page/iocn/girl.png");
			context.find(".Context-One")[0].style.display = "none";
		}else if(atext == "男装/运动户外"){
			img.attr("src","page/iocn/boy.png");
			context.find(".Context-Two")[0].style.display = "none";
		}else if(atext == "女鞋/男鞋/箱包"){
			img.attr("src","page/iocn/shoes.png");
			context.find(".Context-Three")[0].style.display = "none";
		}else if(atext == "美妆/个人护理"){
			img.attr("src","page/iocn/cosmetics.png");
			context.find(".Context-Four")[0].style.display = "none";
		}else if(atext == "腕表/眼镜/珠宝饰品"){
			img.attr("src","page/iocn/jewelry.png");
			context.find(".Context-Five")[0].style.display = "none";
		}else if(atext == "手机/数码/电脑办公"){
			img.attr("src","page/iocn/phone.png");
			context.find(".Context-Six")[0].style.display = "none";
		}else if(atext == "母婴玩具"){
			img.attr("src","page/iocn/toy.png");
			context.find(".Context-Seven")[0].style.display = "none";
		}else if(atext == "零食/茶酒/进口食品"){
			img.attr("src","page/iocn/food.png");
			context.find(".Context-Eight")[0].style.display = "none";
		}else if(atext == "生鲜水果"){
			img.attr("src","page/iocn/fruit.png");
			context.find(".Context-Nine")[0].style.display = "none";
		}else if(atext == "大家电/生活电器"){
			img.attr("src","page/iocn/appliance.png");
			context.find(".Context-Ten")[0].style.display = "none";
		}else if(atext == "家具建材"){
			img.attr("src","page/iocn/furniture.png");
			context.find(".Context-Eleven")[0].style.display = "none";
		}else if(atext == "汽车/配件/用品"){
			img.attr("src","page/iocn/car.png");
			context.find(".Context-Twelve")[0].style.display = "none";
		}else if(atext == "家纺/家饰/鲜花"){
			img.attr("src","page/iocn/textile.png");
			context.find(".Context-Thirteen")[0].style.display = "none";
		}else if(atext == "医药保健"){
			img.attr("src","page/iocn/medicine.png");
			context.find(".Context-Fourteen")[0].style.display = "none";
		}else if(atext == "厨具/收纳/宠物"){
			img.attr("src","page/iocn/family.png");
			context.find(".Context-Fifteen")[0].style.display = "none";
		}else if(atext == "图书音像"){
			img.attr("src","page/iocn/image.png");
			context.find(".Context-Sixteen")[0].style.display = "none";
		}
		context[0].style.visibility = "hidden";
	});
}
//轮播函数封装
function cycle(index){
	$(function(){
		if(index == 6 || index == 0){
			$("#Tmall-Cycle")[0].style.backgroundColor = "rgb(201,177,141)";
		}else if(index == 1){
			$("#Tmall-Cycle")[0].style.backgroundColor = "rgb(220,30,42)";
		}else if(index == 2){
			$("#Tmall-Cycle")[0].style.backgroundColor = "rgb(223,35,28)";
		}else if(index == 3){
			$("#Tmall-Cycle")[0].style.backgroundColor = "rgb(232,232,232)";
		}else if(index == 4){
			$("#Tmall-Cycle")[0].style.backgroundColor = "rgb(232,232,232)";
		}else if(index == 5){
			$("#Tmall-Cycle")[0].style.backgroundColor = "rgb(245,227,217)";
		}
	});
}