package com.practice.controllerservice.resources;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/controller")
public class HomeController {
	
	private static Logger logger = LoggerFactory.getLogger(HomeController.class.getName());
	
	@Autowired
	private RestTemplate restTemplate;
	@RequestMapping("/movies")
	
	public String getMovieInfo(){
		
		String output=null;
		try {
			System.out.println("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO --------- called controller getMovieInfo");
			output = restTemplate.getForObject("http://Info-Service/movies", String.class);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
		
		System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + output);
		return output;
	}

//	@Autowired
//	private RestTemplate restTemplate1;
	@RequestMapping("/seats/booked")	
	public String getBookedSeatsInfo(){
		
		String output=null;
		try {
			System.out.println("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO --------- called controller getSeatInfo");
			output = restTemplate.getForObject("http://book-seat-service/seats/booked", String.class);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
				
		return output;
	}
	@RequestMapping("pay/{movieName}/{selectedSeats}/{totalCost}")
	public String paymentStatus(@PathVariable("movieName") String movieName, @PathVariable("selectedSeats") String selectedSeats, @PathVariable("totalCost") String totalCost ){
		
		String output=null;
		try {
			System.out.println("pay");
			output = restTemplate.getForObject("http://payments-service/pay/" + movieName +"/"+ selectedSeats + "/" + totalCost, String.class);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
				
		return output;
	}
	
	
}
