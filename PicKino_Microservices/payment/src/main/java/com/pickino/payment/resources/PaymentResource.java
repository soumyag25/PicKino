package com.pickino.payment.resources;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;



@RestController
@RequestMapping("/pay")
public class PaymentResource {
	
	private static Logger logger = LoggerFactory.getLogger(PaymentResource.class.getName());
	
	@Autowired
	RestTemplate restTemplate;
	
	@RequestMapping("/{movieName}/{selectedSeats}/{totalCost}")
	public String paymentStatus(@PathVariable("movieName") String movieName, @PathVariable("selectedSeats") String selectedSeats, @PathVariable("totalCost") Integer totalCost ){
		
		String bookingId=null;
		DateFormat dateFormat = new SimpleDateFormat("yyMMddHHmmss");
		Date date = new Date();
		try {
			restTemplate.getForObject("http://book-seat-service/seats/reserve/"+selectedSeats, String.class);
			bookingId = movieName.substring(0, 2) + dateFormat.format(date);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
		
		return bookingId;
	}
}
