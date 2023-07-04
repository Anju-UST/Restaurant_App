package com.ust.adminservice.service;

import com.ust.adminservice.modal.Restaurant;
import com.ust.adminservice.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    public Restaurant addRestaurant(Restaurant rest) {
        Restaurant rest1=restaurantRepository.save(rest);
        return rest1;
    }

    public List<Restaurant> getAllRest() {
        return restaurantRepository.findAll();
    }

    public void deleteRest(Long id) {
        restaurantRepository.deleteById(id);
    }

    public Restaurant updateRest(Long id, Restaurant rest) {
        Restaurant temp=null;
        Optional<Restaurant> op1=restaurantRepository.findById(id);
        if(op1.isPresent()) {
            temp=op1.get();
            temp.setRestName(rest.getRestName());
            temp.setRestAddress(rest.getRestAddress());
            temp.setRestContact(rest.getRestContact());
            temp.setRestPic(rest.getRestPic());
            Restaurant rest3=restaurantRepository.save(temp);
            return rest3;
        }
        else
        {
            return null;
        }
    }

    public Restaurant getRestById(Long id) {
        Optional<Restaurant> op=restaurantRepository.findById(id);
        if(op.isPresent()) {
            return op.get();
        }
        else
            return	null;
    }
}
