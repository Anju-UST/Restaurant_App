package com.ust.kitchenstaffservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class KitchenstaffServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(KitchenstaffServiceApplication.class, args);
	}

}
