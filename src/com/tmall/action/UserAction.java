package com.tmall.action;

import java.io.IOException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;
import com.tmall.pojo.Category;
import com.tmall.pojo.Order;
import com.tmall.pojo.Product;
import com.tmall.pojo.Shopcart;
import com.tmall.pojo.User;
import com.tmall.service.UserService;

public class UserAction extends ActionSupport {
	
	UserService userService;
	User user;
	HttpServletRequest request = ServletActionContext.getRequest();
	HttpServletResponse response = ServletActionContext.getResponse();
	
	//删除订单产品
	public void deleteOrder() {
		int id = Integer.parseInt(request.getParameter("order.id"));
		userService.deleteOrder(id);
	}
	//删除购物车商品
	public void deleteShopcart() {
		int id = Integer.parseInt(request.getParameter("id"));
		userService.deleteShopcart(id);
	}
	//跳转分类页面
	public String classify() {
		Category category = userService.classify(1);
		Set<Product> products = category.getProducts();
		request.setAttribute("category", category);
		return "success";
	}
	//提交评价跳转产品页面
	public String content() {
		String orderNumber = request.getParameter("orderNumber");
		String content = request.getParameter("content");
		System.out.println(content);
		int id = Integer.parseInt(request.getParameter("id"));
		user = (User) request.getSession().getAttribute("user");
		Product product = userService.content(id,content,user,orderNumber);
		request.setAttribute("product", product);
		return "success";
	}
	//评价页面跳转
	public String comments() {
		String orderNumber = request.getParameter("orderNumber");
		int id = Integer.parseInt(request.getParameter("id"));
		ArrayList al = userService.comments(id, orderNumber);
		Order order = (Order) al.remove(0);
		Shopcart shopcart = (Shopcart) al.remove(0);
		request.setAttribute("order", order);
		request.setAttribute("shopcart", shopcart);
		return "success";
	}
	//交易完成
	public String dealSuccess() {
		int id = Integer.parseInt(request.getParameter("order.id"));
		userService.dealSuccess(id);
		return "success";
	}
	//确认收货
	public String goods() {
		System.out.println("测试");
		String orderNumber = request.getParameter("orderNumber");
		int id = Integer.parseInt(request.getParameter("id"));
		ArrayList al = userService.goods(id,orderNumber);
		Order order = (Order) al.remove(0);
		Shopcart shopcart = (Shopcart) al.remove(0);
		request.setAttribute("order", order);
		request.setAttribute("shopcart", shopcart);
		return "success";
	}
	//提醒卖家发货
	public String remind() {
		System.out.println("提醒卖家发货");
		if(request.getSession().getAttribute("user") != null) {
			String orderNumber = request.getParameter("orderNumber");
			int id = Integer.parseInt(request.getParameter("id"));
			userService.remind(id, orderNumber);
			System.out.println(id);
			System.out.println(orderNumber);
			user = (User) request.getSession().getAttribute("user");
			request.setAttribute("orders", userService.orderPage(user));
			return "success";
		}else {
			return "fail";
		}
	}
	//付款
	public String payMoney() {
		int id = Integer.parseInt(request.getParameter("id"));
		return "success";
	}
	//订单页面
	public String orderPage() {
		if(request.getSession().getAttribute("user") != null) {
			user = (User) request.getSession().getAttribute("user");
			request.setAttribute("orders", userService.orderPage(user));
			return "success";
		}else {
			return "fail";
		}
	}
	//支付成功页面跳转
	public String paySuccess() {
		String orderNumber = request.getParameter("orderNumber");
		String address = userService.paySuccess(orderNumber);
		request.setAttribute("address", address);
		request.setAttribute("totle", request.getParameter("totle"));
		return "success";
	}
	//提交订单跳转付款页面并且生成订单
	public String payment() {
		//本身存在订单号但是未付款
		if(request.getParameter("orderNumber") != null) {
			String orderNumber = request.getParameter("orderNumber");
			int id = Integer.parseInt(request.getParameter("id"));
			String[] str = userService.newOrder(id, orderNumber);
			userService.deleteOrder(orderNumber);
			request.setAttribute("totle",Double.parseDouble(str[1]));
			request.setAttribute("orderNumber", str[0]);
		//本身不存在订单号生成订单
		}else {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSSS");
			String orderNumber = sdf.format(new Date());
			String name = request.getParameter("name");
			String address = request.getParameter("address");
			String phone = request.getParameter("phone");
			String zip = request.getParameter("zip");
			String state = "NotPay";
			user = (User) request.getSession().getAttribute("user");
			String[] ids = request.getParameterValues("id");
			Date addDate = new Timestamp(System.currentTimeMillis());
			Order order = new Order(orderNumber, name, address, phone, zip,state, user, addDate);
			double totle = userService.payment(order,ids);
			request.setAttribute("totle", totle);
			request.setAttribute("orderNumber", orderNumber);
		}
		return "success";
	}
	//结算跳转结算页面
	public String pay() {
		String[] ids = request.getParameterValues("id");
		request.setAttribute("shopcarts", userService.pay(ids));
		return "success";
	}
	//跳转购物车页面
	public String shopcartPage() {
		if(request.getSession().getAttribute("user") != null) {
			user = (User) request.getSession().getAttribute("user");
			request.setAttribute("shopcarts", userService.shopcartPage(user));
			return "success";
		}else {
			return "fail";
		}
	}
	//立即购买
	public String nowPay() {
		if(request.getSession().getAttribute("user") == null) {
			return "fail";
		}else {
			user = (User) request.getSession().getAttribute("user");
			int id = Integer.parseInt(request.getParameter("id"));
			int num = Integer.parseInt(request.getParameter("num"));
			userService.addShopcart(id, num, user);
			String[] ids = {id + ""};
//			request.setAttribute("shopcarts", userService.pay(ids));
			System.out.println("立即购买");
			return "success";
		}
	}
	//加入购物车
	public void addShopcart() {
		int id = Integer.parseInt(request.getParameter("id"));
		int num = Integer.parseInt(request.getParameter("num"));
		user = (User) request.getSession().getAttribute("user");
		userService.addShopcart(id, num, user);
	}
	//点击产品进入产品页面
	public String product() {
		String id = request.getParameter("id");
		Product product = userService.product(id);
		request.setAttribute("product", product);
		return "success";
	}
	//主页访问
	public String home() {
		request.setAttribute("categorys", userService.home());
		return "success";
	}
	//退出登陆
	public String out() {
		request.getSession().setAttribute("user", null);
		return "success";
	}
	//登陆界面
	public String login() {
		user = new User();
		user.setUsername(request.getParameter("username"));
		user.setPassword(request.getParameter("password"));
		userService.login(user);
		request.getSession().setAttribute("user", userService.login(user));
		return "success";
	}
	//注册
	public String registered() {
		user = new User();
		user.setUsername(request.getParameter("username"));
		user.setPassword(request.getParameter("password"));
		userService.registered(user);
		return "success";
	}
	//检查用户名
	public void checkName() {
		String username = request.getParameter("username");
		String content = userService.checkName(username);
		try {
			response.getWriter().print(content);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
}
