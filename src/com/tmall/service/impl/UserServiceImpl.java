package com.tmall.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.orm.hibernate3.HibernateTemplate;

import com.tmall.dao.UserDAO;
import com.tmall.pojo.Category;
import com.tmall.pojo.Order;
import com.tmall.pojo.Product;
import com.tmall.pojo.Shopcart;
import com.tmall.pojo.User;
import com.tmall.service.UserService;

public class UserServiceImpl implements UserService{
	
	UserDAO userDAO;
	
	@Override
	public void deleteOrder(int id) {
		userDAO.deleteOrder(id);
	}
	
	@Override
	public void deleteShopcart(int id) {
		userDAO.deleteShopcart(id);
	}
	
	@Override
	public Category classify(int id) {
		return userDAO.classify(id);
	}
	
	@Override
	public Product content(int id,String content,User u,String orderNumber) {
		return userDAO.content(id,content,u,orderNumber);
	}
	
	@Override
	public ArrayList comments(int id, String orderNumber) {
		return userDAO.comments(id, orderNumber);
	}
	
	@Override
	public void dealSuccess(int id) {
		userDAO.dealSuccess(id);
	}
	
	@Override
	public ArrayList goods(int id,String orderNumber) {
		return userDAO.goods(id,orderNumber);
	}
	
	@Override
	public void remind(int id, String orderNumber) {
		userDAO.remind(id, orderNumber);
	}
	
	@Override
	public void deleteOrder(String orderNumber) {
		userDAO.deleteOrder(orderNumber);
	}
	
	@Override
	public String[] newOrder(int id, String orderNumber) {
		return userDAO.newOrder(id, orderNumber);
	}
	
	@Override
	public Set<Order> orderPage(User u) {
		return userDAO.orderPage(u);
	}
	
	@Override
	public String paySuccess(String orderNumber) {
		return userDAO.paySuccess(orderNumber);
	}
	
	@Override
	public double payment(Order o,String[] ids) {
		return userDAO.payment(o,ids);
	}
	
	@Override
	public Set<Shopcart> pay(String[] ids) {
		return userDAO.pay(ids);
	}
	
	@Override
	public Set<Shopcart> shopcartPage(User u) {
		return userDAO.shopcartPage(u);
	}
	
	@Override
	public void addShopcart(int id, int num, User u) {
		userDAO.addShopcart(id, num, u);
	}
	
	@Override
	public Product product(String id) {
		return userDAO.product(id);
	}
	
	@Override
	public List<Category> home() {
		return userDAO.home();
	}
	
	@Override
	public User login(User u) {
		return userDAO.login(u);
	}
	
	@Override
	public void registered(User u) {
		userDAO.registered(u);
	}
	
	@Override
	public String checkName(String username) {
		return userDAO.checkName(username);
	}

	public UserDAO getUserDAO() {
		return userDAO;
	}

	public void setUserDAO(UserDAO userDAO) {
		this.userDAO = userDAO;
	}
	
	
}
