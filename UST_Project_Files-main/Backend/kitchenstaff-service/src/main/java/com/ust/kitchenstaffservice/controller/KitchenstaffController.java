package com.ust.kitchenstaffservice.controller;

import com.ust.kitchenstaffservice.exception.CartNotFoundException;
import com.ust.kitchenstaffservice.modal.Kitchenstaff;
import com.ust.kitchenstaffservice.service.KitchenstaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/staff")
@CrossOrigin("*")
public class KitchenstaffController {

    @Autowired
    private KitchenstaffService service;

    @PostMapping("/addOrders")
    public ResponseEntity<Kitchenstaff> addOrder(@RequestBody Kitchenstaff kitchen){
        return ResponseEntity.ok(service.addOrders(kitchen));
    }

    @GetMapping("/orders")
    public ResponseEntity<List<Kitchenstaff>> getAllOrders(){
        return ResponseEntity.ok(service.getAllOrders());
    }

    //get item by res
    @GetMapping("/ordersbyrestuarent/{restname}")
    public ResponseEntity<List<Kitchenstaff>> getAllOrdersbyRestuarentname(@PathVariable String restname){
        return ResponseEntity.ok(service.getAllOrdersbyRestuarentname(restname));
    }

    @PutMapping("/orders/{userid}")
    public ResponseEntity<?> updateStatus(@PathVariable Long userid,@RequestBody Kitchenstaff kitchen) throws CartNotFoundException {
        return ResponseEntity.ok(service.updateStatus(userid,kitchen));
    }

}
