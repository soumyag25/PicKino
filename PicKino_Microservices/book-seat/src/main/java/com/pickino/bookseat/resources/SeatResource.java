package com.pickino.bookseat.resources;
import java.io.File;
import java.nio.file.Files;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/seats")
public class SeatResource {
	private static Logger logger = LoggerFactory.getLogger(SeatResource.class.getName());
	Map<String, List<Object>> mapBookedSeats = new HashMap<>();
	@RequestMapping("/booked")
	 public String getBookedSeats() {
		  System.out.println("entering booked seats");

			File file = null;
			String output=null;
			try {
				file = ResourceUtils.getFile("classpath:seats.json");
				String data = new String(Files.readAllBytes(file.toPath()));
				JSONObject json = new JSONObject(data);
				JSONObject jsonBookedSeats = json.getJSONObject("bookedSeats");
				output = jsonBookedSeats.toString();
				for(String key: jsonBookedSeats.keySet()){
					System.out.println(jsonBookedSeats.get(key));
					mapBookedSeats.put(key, jsonBookedSeats.getJSONArray(key).toList());
				}
				
			} catch (Exception e) {
				logger.error(e.getMessage(), e);
			}
			
			return output;
		
	      
	    }
	
	@RequestMapping("/reserve/{selectedSeats}")
	 public boolean getReserveSeats(@PathVariable("selectedSeats") String selectedSeats) {
		  System.out.println("entering book seats");
		  boolean output = false;
		  try{
		  String[] arrSelectedSeat = selectedSeats.split(",");
		  	for(String input: arrSelectedSeat){
		  		String[] keyValue = input.trim().split("");
		  		List<Object> value = mapBookedSeats.get(keyValue[0]);
		  		value.add(keyValue[1]);
		  		mapBookedSeats.put(keyValue[0], value);
		  	}
		  	output = true;
		  }
		  catch(Exception ex){
			  logger.error(ex.getMessage(), ex);
			  
		  }
			return output;
		
	      
	    }
	
	public static void main(String[] args) {
		String selectedSeats = "A5, B7, C7";
		SeatResource resource = new SeatResource();
		resource.getBookedSeats();
		
		String[] arrSelectedSeat = selectedSeats.split(",");
	  	for(String input: arrSelectedSeat){
	  		String[] keyValue = input.trim().split("");
	  		List<Object> value = resource.mapBookedSeats.get(keyValue[0]);
	  		value.add(keyValue[1]);
	  		resource.mapBookedSeats.put(keyValue[0], value);
	  	}
	}
	/*
	  @GetMapping("/seats")
	 public String sendForm(@RequestParam(defaultValue="0") String movieId, Seats abc) {
		  System.out.println("YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY :::: ");
		  abc.movieId = movieId;
	        return "book_seat_ui";
	    }

	    @PostMapping("/seats")
	    public String processForm(Seats abc) {
	        System.out.println("YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY :::: " + abc.movieId);
	        return "results";
	    }
*/}
