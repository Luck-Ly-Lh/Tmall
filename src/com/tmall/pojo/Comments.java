package com.tmall.pojo;

import java.util.Date;

public class Comments {
	
	int id;
	
	String content;
	
	User u;
	
	Date comDate;
	
	Product p;
	
	public Comments() {
		
	}

	public Comments(String content, User u, Date comDate, Product p) {
		super();
		this.content = content;
		this.u = u;
		this.comDate = comDate;
		this.p = p;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public User getU() {
		return u;
	}

	public void setU(User u) {
		this.u = u;
	}

	public Date getComDate() {
		return comDate;
	}

	public void setComDate(Date comDate) {
		this.comDate = comDate;
	}

	public Product getP() {
		return p;
	}

	public void setP(Product p) {
		this.p = p;
	}
	
	
	

}
