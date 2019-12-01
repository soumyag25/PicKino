package com.practice.controllerservice.resources;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
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
			System.out.println("called controller getMovieInfo");
			output = restTemplate.getForObject("http://Info-Service/movies", String.class);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
		
		return output;
	}
	
	
	
}
