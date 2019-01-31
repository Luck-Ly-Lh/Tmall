package com.tmall.pojo;

import java.util.List;
import java.util.Set;

public class User {
	
	int id;
	
	String username;
	
	String password;
	
	Set<Shopcart> shopcarts;
	
	Set<Order> orders;
	
	Set<Comments> comments;
	
	

	public Set<Comments> getComments() {
		return comments;
	}

	public void setComments(Set<Comments> comments) {
		this.comments = comments;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Shopcart> getShopcarts() {
		return shopcarts;
	}

	public void setShopcarts(Set<Shopcart> shopcarts) {
		this.shopcarts = shopcarts;
	}

	public Set<Order> getOrders() {
		return orders;
	}

	public void setOrders(Set<Order> orders) {
		this.orders = orders;
	}

	

	
	
	
	
	
}
