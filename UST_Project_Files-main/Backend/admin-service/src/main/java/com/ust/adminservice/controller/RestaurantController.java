package com.ust.adminservice.controller;

import com.ust.adminservice.modal.Restaurant;
import com.ust.adminservice.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/restaurant/")
@CrossOrigin("*")
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Restaurant rest){
        return ResponseEntity.ok().body(restaurantService.addRestaurant(rest));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Restaurant>> getall(){
        return ResponseEntity.ok().body(restaurantService.getAllRest());
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        restaurantService.deleteRest(id);
        ResponseEntity.ok().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,@RequestBody Restaurant rest ){
        return ResponseEntity.ok().body(restaurantService.updateRest(id,rest));
    }

    @GetMapping("/getbyid/{id}")
    public ResponseEntity<Restaurant> getbyid(@PathVariable Long id ){
        return ResponseEntity.ok().body(restaurantService.getRestById(id));
    }

}
