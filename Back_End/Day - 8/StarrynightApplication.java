package com.java.starrynight;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.java.starrynight.enumerated.Role;
import com.java.starrynight.model.User;
import com.java.starrynight.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@SpringBootApplication
public class StarrynightApplication {

	private final PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(StarrynightApplication.class, args);
	}

	@SuppressWarnings("null")
	@Bean
	public CommandLineRunner commandLineRunner(UserRepository userRepository){
		return args -> {
			if(userRepository.count() > 0) return;
			var admin = User.builder()
						.username("Admin")
						.email("admin@gmail.com")
						.password(passwordEncoder.encode("Admin@123"))
						.role(Role.ADMIN)
						.build();
			userRepository.save(admin);
		};
	}

}
