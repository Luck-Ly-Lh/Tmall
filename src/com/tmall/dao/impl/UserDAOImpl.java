package com.tmall.dao.impl;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.orm.hibernate3.HibernateTemplate;

import com.tmall.dao.UserDAO;
import com.tmall.pojo.Category;
import com.tmall.pojo.Comments;
import com.tmall.pojo.Order;
import com.tmall.pojo.Product;
import com.tmall.pojo.Shopcart;
import com.tmall.pojo.User;

public class UserDAOImpl extends HibernateTemplate implements UserDAO {
	
	@Override
	public String checkName(String username) {
		List<User> list  = find("from User u where u.username = ?",username);
		if(list.isEmpty()) {
			return "glyphicon glyphicon-ok-sign";
		}else {
			return "glyphicon glyphicon-remove-sign";
		}
	}
	
	@Override
	public void registered(User u) {
		save(u);
	}
	
	@Override
	public User login(User u) {
		List<User> list = find("from User u where u.username = ? and u.password = ?",u.getUsername(),u.getPassword());
		if(list.isEmpty()) {
			return null;
		}else {
			return list.get(0);
		}
	}
	
	@Override
	public List<Category> home() {
		return find("from Category");
	}
	
	@Override
	public Product product(String id) {
		return get(Product.class, Integer.parseInt(id));
	}
	
	@Override
	public void addShopcart(int id, int num,User u) {
		Product product = get(Product.class, id);
		Shopcart shopcart = new Shopcart();
		shopcart.setNum(num);
		shopcart.setU(u);
		shopcart.setP(product);
		save(shopcart);
	}

	@Override
	public Set<Shopcart> shopcartPage(User u) {
		User user = get(User.class, u.getId());
		return user.getShopcarts();
	}
	
	@Override
	public Set<Shopcart> pay(String[] ids) {
		Set<Shopcart> shopcarts = new HashSet();
		for (String id : ids) {
			shopcarts.add(get(Shopcart.class, Integer.parseInt(id)));
		}
		return shopcarts;
	}
	
	@Override
	public double payment(Order o,String[] ids) {
		Set<Shopcart> shopcarts = new HashSet();
		double totle = 0;
		for (String id : ids) {
			Shopcart shopcart = get(Shopcart.class, Integer.parseInt(id));
			totle += shopcart.getP().getPrice();
			shopcarts.add(shopcart);
			shopcart.setU(null);
			update(shopcart);
		}
		o.setShopcarts(shopcarts);
		save(o);
		return totle;
	}
	
	@Override
	public String[] newOrder(int id, String orderNumber) {
		List<Order> list = find("from Order o where o.orderNumber = ?",orderNumber);
		Shopcart shopcart = get(Shopcart.class, id);
		Set<Shopcart> shopcarts = new HashSet<>();
		Order order = list.get(0);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSSS");
		Date addDate = new Timestamp(System.currentTimeMillis());
		String orderNum =  sdf.format(new Date());
		String[] str = new String[2];
		shopcart.setO(null);
		shopcarts.add(shopcart);
		order.setOrderNumber(orderNum);
		order.setAddDate(addDate);
		order.setShopcarts(shopcarts);
		str[0] = orderNum;
		str[1] = shopcart.getNum() * shopcart.getP().getPrice() + "";
		save(order);
		return str;
	}
	
	@Override
	public void deleteOrder(String orderNumber) {
		List<Order> list = find("from Order o where o.orderNumber = ?",orderNumber);
		Order order = list.get(0);
		if(order.getShopcarts().isEmpty()) {
			delete(order);
		}
	}
	
	@Override
	public String paySuccess(String orderNumber) {
		List<Order> list = find("from Order o where o.orderNumber = ?",orderNumber);
		Order order = list.get(0);
		Date payDate = new Timestamp(System.currentTimeMillis());
		order.setPayDate(payDate);
		order.setState("Payment");
		update(order);
		return order.getAddress();
	}
	
	@Override
	public Set<Order> orderPage(User u) {
		User user = get(User.class, u.getId());
		return user.getOrders();
	}
	
	@Override
	public void remind(int id,String orderNumber) {
		List<Order> list = find("from Order o where o.orderNumber = ?",orderNumber);
		Order order = list.get(0);
		order.setState("SendGoods");
		Date sendDate = new Timestamp(System.currentTimeMillis());
		Shopcart shopcart = get(Shopcart.class, id);
		shopcart.setSendDate(sendDate);
		update(order);
		update(shopcart);
	}
	
	@Override
	public ArrayList goods(int id,String orderNumber) {
		Shopcart shopcart = get(Shopcart.class, id);
		List<Order> list = find("from Order o where o.orderNumber = ?",orderNumber);
		Order order = list.get(0);
		ArrayList al = new ArrayList();
		al.add(order);
		al.add(shopcart);
		
		return al;
	}
	
	@Override
	public void dealSuccess(int id) {
		Order order = get(Order.class, id);
		order.setState("ReceivedGoods");
		update(order);
	}
	
	@Override
	public ArrayList comments(int id,String orderNumber) {
		Shopcart shopcart = get(Shopcart.class, id);
		List<Order> list = find("from Order o where o.orderNumber = ?",orderNumber);
		Order order = list.get(0);
		ArrayList al = new ArrayList();
		al.add(order);
		al.add(shopcart);
		return al;
	}
	
	@Override
	public Product content(int id,String content,User u,String orderNumber) {
		List<Order> list = find("from Order o where o.orderNumber = ?",orderNumber);
		Order order = list.get(0);
		order.setState(null);
		update(order);
		Date comDate = new Timestamp(System.currentTimeMillis());
		Product p = get(Product.class, id);
		Comments comments = new Comments(content, u, comDate, p);
		save(comments);
		return p;
	}
	
	@Override
	public Category classify(int id) {
		return get(Category.class, 1);
	}
	
	@Override
	public void deleteShopcart(int id) {
		delete(get(Shopcart.class, id));
	}
	
	@Override
	public void deleteOrder(int id) {
		delete(get(Order.class, id));
	}
	
	
}
