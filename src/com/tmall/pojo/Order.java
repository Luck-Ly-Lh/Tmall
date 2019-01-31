package com.tmall.pojo;

import java.util.Date;
import java.util.Set;

public class Order {
	
	int id;
	
	String orderNumber;
	
	String name;
	
	String address;
	
	String phone;
	
	String zip;
	
	String state;

	Date addDate;
	
	Date payDate;
	
	User u;
	
	Set<Shopcart> shopcarts;
	
	public Order() {
		
	}

	public Order(String orderNumber, String name, String address, String phone, String zip,String state, User u,Date addDate) {
		super();
		this.orderNumber = orderNumber;
		this.name = name;
		this.address = address;
		this.phone = phone;
		this.zip = zip;
		this.u = u;
		this.addDate = addDate;
		this.state = state;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(String orderNumber) {
		this.orderNumber = orderNumber;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public Date getAddDate() {
		return addDate;
	}

	public void setAddDate(Date addDate) {
		this.addDate = addDate;
	}

	public Date getPayDate() {
		return payDate;
	}

	public void setPayDate(Date payDate) {
		this.payDate = payDate;
	}

	public User getU() {
		return u;
	}

	public void setU(User u) {
		this.u = u;
	}

	public Set<Shopcart> getShopcarts() {
		return shopcarts;
	}

	public void setShopcarts(Set<Shopcart> shopcarts) {
		this.shopcarts = shopcarts;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	
	
	

}
