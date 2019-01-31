package com.tmall.pojo;

import java.util.Date;

public class Shopcart {
	
	int id;
	
	int num;
	
	User u;
	
	Order o;
	
	Date sendDate;
	
	Product p;

	public Product getP() {
		return p;
	}

	public void setP(Product p) {
		this.p = p;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getU() {
		return u;
	}

	public void setU(User u) {
		this.u = u;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public Date getSendDate() {
		return sendDate;
	}

	public void setSendDate(Date sendDate) {
		this.sendDate = sendDate;
	}

	public Order getO() {
		return o;
	}

	public void setO(Order o) {
		this.o = o;
	}
	
	
	

}
