package com.retodos.repository.crud;


import com.retodos.model.Persona;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author lilia
 */
public interface PersonaCrudRepository  extends MongoRepository<Persona, Integer>{
    
}
