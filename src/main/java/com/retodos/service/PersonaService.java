package com.retodos.service;


import com.retodos.model.Persona;
import com.retodos.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author lilia
 */
@Service
public class PersonaService {
    @Autowired
    private PersonaRepository personaRepository;

    public List<Persona> getAll(){
        return personaRepository.getAll();
    }

    public Optional<Persona> getById(Integer id){
        return personaRepository.getById(id);
    }

    public Persona save(Persona persona){
        if(persona.getId() == null)
            return persona;//En el reto hay obtener el id de alguna manera

        Optional<Persona> existePersona= personaRepository.getById(persona.getId());//Podria ser: getById(persona.getId());
         if (existePersona.isPresent()){
             return persona;
         }

         return personaRepository.save(persona);
    }

    public Persona update(Persona persona){

        Optional<Persona> existePersona= personaRepository.getById(persona.getId());
        if (existePersona.isEmpty()){
            return persona;
        }
        //existePersona.get().setNombre(persona.getNombre());
        //existePersona.get().setCorreo(persona.getCorreo());
        //existePersona.get().setEdad(persona.getEdad());

        return personaRepository.save(persona);
    }

    public void delete(Integer id){
        personaRepository.delete(id);
    }
}
