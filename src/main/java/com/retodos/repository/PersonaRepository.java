package com.retodos.repository;


import com.retodos.model.Persona;
import com.retodos.repository.crud.PersonaCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
/**
 *
 * @author lilia
 */
@Repository
public class PersonaRepository {
    @Autowired
    private PersonaCrudRepository personaCrudRepository;

    public List<Persona> getAll(){ return personaCrudRepository.findAll();}

    //Esta función trae a una persona según su id
    public Optional<Persona> getById(Integer id){
        return personaCrudRepository.findById(id);
    }

    public Persona save(Persona persona){
        return personaCrudRepository.save(persona);
    }

    public void delete(Integer id){
        personaCrudRepository.deleteById(id);
    }
}
