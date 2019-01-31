<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
 
<%
    String name = request.getParameter("name");
    System.out.println(name);
    System.out.println("name");
    if("abc".equals(name))
    	out.print("<font color='red'>已经存在</font>");
    else
    	out.print("<font color='green'>可以使用</font>");
     
%>