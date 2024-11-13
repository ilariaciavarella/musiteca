package com.musiteca.musiteca_api;

import com.musiteca.musiteca_api.post.service.PostService;
import com.musiteca.musiteca_api.user.model.MusitecaUser;
import com.musiteca.musiteca_api.user.model.Role;
import com.musiteca.musiteca_api.user.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.HashSet;

@SpringBootApplication
public class MusitecaApplication {

	public static void main(String[] args) {
		SpringApplication.run(MusitecaApplication.class, args);
	}

//	@Bean
//	CommandLineRunner run(UserService userService) {
//		return args -> {
//			userService.saveRole(new Role(null, "ROLE_USER"));
//			userService.saveRole(new Role(null,"ROLE_MANAGER"));
//			userService.saveRole(new Role(null,"ROLE_ADMIN"));
//			userService.saveRole(new Role(null,"ROLE_SUPER_ADMIN"));
//
//			userService.saveUser(new MusitecaUser(null, "Ilaria", "Ciavarella", "ila.ciava@gmail.com", "password", new HashSet<>()));
//
//			userService.addRoleToUser("ila.ciava@gmail.com", "ROLE_USER");
//			userService.addRoleToUser("ila.ciava@gmail.com", "ROLE_ADMIN");
//		};
//	}

//	@Bean
//	CommandLineRunner run(PostService postService) {
//		return args -> {
//			postService.createPost("ila.ciava@gmail.com", "Ciao a tutti", "Torino", "Tromba", "Tomahnn");
//		};
//	}

}
