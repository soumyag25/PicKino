package com.pickino.bookseat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class BookSeatApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookSeatApplication.class, args);
	}

}
