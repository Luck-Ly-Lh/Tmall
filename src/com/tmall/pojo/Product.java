package com.tmall.pojo;

import java.util.Set;

public class Product {
	
	int id;
	
	String imgSrc;
	
	String name;
	
	double price;
	
	Category category;
	
	Set<Comments> comments;
	
	Shopcart shopcart;

	public Shopcart getShopcart() {
		return shopcart;
	}

	public void setShopcart(Shopcart shopcart) {
		this.shopcart = shopcart;
	}

	public Set<Comments> getComments() {
		return comments;
	}

	public void setComments(Set<Comments> comments) {
		this.comments = comments;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getImgSrc() {
		return imgSrc;
	}

	public void setImgSrc(String imgSrc) {
		this.imgSrc = imgSrc;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
	

	
	
	
}
