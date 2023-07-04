package com.ust.menuservice.controller;

import com.ust.menuservice.modal.Menu;
import com.ust.menuservice.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/menu")
@CrossOrigin("*")
public class MenuController {

    @Autowired
    private MenuService menuService;

    @PostMapping("/addmenu")
    public ResponseEntity<?> addMenu(@RequestBody Menu menu){
        return ResponseEntity.ok().body(menuService.addMenu(menu));
    }

    @DeleteMapping("/delete/menu/{mid}")
    public void deletemenu(@PathVariable Long mid){
        menuService.deleteMenu(mid);
        ResponseEntity.ok().build();
    }

    @PutMapping("/update/{mid}")
    public ResponseEntity<?> updatemenu(@PathVariable Long mid,@RequestBody Menu menu ){
        return ResponseEntity.ok().body(menuService.updateMenu(mid,menu));
    }

    @GetMapping("/find/{restname}")
    public ResponseEntity<List<Menu>> getByRestName(@PathVariable String restname){
        return ResponseEntity.ok().body(menuService.getByRestname(restname));
    }

    @GetMapping("/getAllMenu")
    public ResponseEntity<List<Menu>> getAllMenu(){
        return ResponseEntity.ok().body(menuService.getAllMenu());
    }

    @GetMapping("/getbyid/menu/{mid}")
    public ResponseEntity<Menu> getbymid(@PathVariable Long mid ){
        return ResponseEntity.ok().body(menuService.getByMenuid(mid));
    }

}
