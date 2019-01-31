package com.tmall.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.tmall.pojo.Category;
import com.tmall.pojo.Order;
import com.tmall.pojo.Product;
import com.tmall.pojo.Shopcart;
import com.tmall.pojo.User;

public interface UserService {

	public String checkName(String username);
	
	public void registered(User u);
	
	public User login(User u);
	
	public List<Category> home();
	
	public Product product(String id);
	
	public void addShopcart(int id,int num,User u);
	
	public Set<Shopcart> shopcartPage(User u);
	
	public Set<Shopcart> pay(String[] ids);
	
	public double payment(Order o,String[] ids);
	
	public String paySuccess(String orderNumber);
	
	public Set<Order> orderPage(User u);
	
	public String[] newOrder(int id,String orderNumber);
	
	public void deleteOrder(String orderNumber);
	
	public void remind(int id,String orderNumber);
	
	public ArrayList goods(int id,String orderNumber);
	
	public void dealSuccess(int id);
	
	public ArrayList comments(int id,String orderNumber);
	
	public Product content(int id,String content,User u,String orderNumber);
	
	public Category classify(int id);
	
	public void deleteShopcart(int id);
	
	public void deleteOrder(int id);
}
