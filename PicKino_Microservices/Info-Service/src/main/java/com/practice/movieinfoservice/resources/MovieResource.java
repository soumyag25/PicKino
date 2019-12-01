package com.practice.movieinfoservice.resources;

import java.io.File;
import java.nio.file.Files;

import org.json.JSONArray;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movies")
public class MovieResource {
	
	private static Logger logger = LoggerFactory.getLogger(MovieResource.class.getName());
	@RequestMapping()
	public String getMovieInfo(){
		
		File file = null;
		String output=null;
		try {
			file = ResourceUtils.getFile("classpath:test.json");
			String data = new String(Files.readAllBytes(file.toPath()));
			JSONArray json = new JSONArray(data);
			output = json.toString();
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
		
		return output;
	}
	
	
	
}
