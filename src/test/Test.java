package test;

import java.util.Set;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.tmall.pojo.Shopcart;
import com.tmall.pojo.User;

public class Test {
	public static void main(String[] args) {
		
		SessionFactory sf = new Configuration().configure().buildSessionFactory();
		  
        Session s = sf.openSession();
        s.beginTransaction();
         
        User user = (User) s.get(User.class, 1);
		Set<Shopcart> shopcarts = user.getShopcarts();
		for (Shopcart shopcart : shopcarts) {
			System.out.println(shopcart.getP().getName());
		}
        
        
         
        s.getTransaction().commit();
        s.close();
        sf.close();
		
		
		
	}

}
