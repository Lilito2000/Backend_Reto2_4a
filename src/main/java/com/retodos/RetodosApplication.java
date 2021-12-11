
package com.retodos;

import com.retodos.repository.crud.ClotheCrudRepository;
import com.retodos.repository.crud.UserCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;


@Component
@SpringBootApplication
public class RetodosApplication implements CommandLineRunner {
   @Autowired
    private ClotheCrudRepository clotheCrudRepository;
    @Autowired
    private UserCrudRepository userCrudRepository;
	public static void main(String[] args) {
		SpringApplication.run(RetodosApplication.class, args);
	}
          @Override
    public void run(String... args) throws Exception {
        clotheCrudRepository.deleteAll();
        userCrudRepository.deleteAll();
    }
        

}