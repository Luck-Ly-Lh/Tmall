<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.*,com.tmall.pojo.*"%>
<%
	Set<Product> products = null;
	Category category = new Category();
	if(request.getAttribute("classify") != null){
		category = ((Category)request.getAttribute("classify"));
		products = category.getProducts();
	}
%>


	<div id="Tmall-Classify">
		<img src="<%=category.getClassImg() %>" style="width: 1230px;height: 141.5px;"><br><br><br>
		<button>综合<span class="glyphicon glyphicon-arrow-down"></span>	</button>
		<button>人气<span class="glyphicon glyphicon-arrow-down"></span>	</button>
		<button>新品<span class="glyphicon glyphicon-arrow-down"></span>	</button>
		<button>销量<span class="glyphicon glyphicon-arrow-down"></span>	</button>
		<button>价格<span class="glyphicon glyphicon-resize-vertical"></span>	</button>
		<input type="text" placeholder="请输入">
		<input type="text" placeholder="请输入"><br><br>
		<div id="Classify-Product">
			<%if(products != null){
				for(Product product : products){%>
			<div class="Product-Content">
				<div>
					<img src="<%=product.getImgSrc() %>">
				</div>
				<strong>￥</strong>
				<strong style="font-size: 22px;"><%=product.getPrice() %></strong><br>
				<div>
					<a href="product"><%=product.getName() %></a>
					<a href="product" class="Product-Store">天猫专卖</a>
				</div>
				<span>月成交</span>
				<strong style="color: rgb(181,124,91)">3.2万笔</strong>
				<span>评价</span>
				<strong style="color: rgb(51,136,187)">23万</strong>
				<a href="#" style="float: right;margin-right: 15px;">
					<img src="page\iocn\wangwang.png">
				</a>
			</div>
			<%	} 
			  }%>
			

		</div><br style="clear: left;"><br><br><br>
		<div style="text-align: center;">
			<img src="page\iocn\_20181229213742.png">
		</div><br><br><br>
	</div>

