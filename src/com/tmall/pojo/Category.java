package com.tmall.pojo;

import java.util.List;
import java.util.Set;

public class Category {
	
	int id;
	
	String name;
	
	String classImg;
	
	Set<Product> products;

	public String getClassImg() {
		return classImg;
	}

	public void setClassImg(String classImg) {
		this.classImg = classImg;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Product> getProducts() {
		return products;
	}

	public void setProducts(Set<Product> products) {
		this.products = products;
	}

	
	
	

}
