/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.retodos.repository.crud;

import com.retodos.model.Clothe;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author lilia
 */
public interface ClotheCrudRepository extends MongoRepository<Clothe, String> {
    
}