package com.retodos.controller;

import com.retodos.model.Persona;
import com.retodos.service.PersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author lilia
 */
@RestController
@RequestMapping("/api/persona")
public class PersonaController {
    @Autowired
    private PersonaService personaService;

    @GetMapping("/all")
    public List<Persona> getAll(){ return personaService.getAll(); }

    @GetMapping("/{id}")
    public Persona getById(@PathVariable Integer id){
        return personaService.getById(id).orElse(null);
    }

    @PutMapping("/update")
    public ResponseEntity<Persona> put(@RequestBody Persona persona){
        Persona per = personaService.update(persona);

        if (per == null)
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);//Solo un ejemplo pero no se requiere

        return new ResponseEntity<>(per, HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Persona> save(@RequestBody Persona persona){
        Persona per = personaService.save(persona);
        return new ResponseEntity<>(per, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable Integer id){
        personaService.delete(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
