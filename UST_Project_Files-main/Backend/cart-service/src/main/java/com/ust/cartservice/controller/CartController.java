package com.ust.cartservice.controller;

import com.ust.cartservice.modal.Cart;
import com.ust.cartservice.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cart")
@CrossOrigin("*")
public class CartController {

    @Autowired
    private CartService cartServ;
    //retrieve item by cart id

    @GetMapping("/viewBycart/{cId}")
    public ResponseEntity<?> getDetailsByCartId(@PathVariable Long cId){
        Cart c = cartServ.getByCartId(cId);
        if(c!=null)
            return new ResponseEntity<Cart>(c, HttpStatus.OK);
        else
            return new ResponseEntity<String>("Cart not available",HttpStatus.NOT_FOUND);
    }

    //retrieve item by userid
    @GetMapping("/viewByuser/{userid}")
    public ResponseEntity<?> getDetailsByUserId(@PathVariable Long userid){
        List<Cart> cList = cartServ.getByUserId(userid);
        if(cList != null)
            return new ResponseEntity<List<Cart>>(cList, HttpStatus.OK);
        else
            return new ResponseEntity<String>("User not available",HttpStatus.NOT_FOUND);
    }



    @GetMapping("/{restname}")
    public ResponseEntity<List<Cart>> viewByRestname(@PathVariable String restname){
        List<Cart> opt = cartServ.getByRestname(restname);
        if(opt!=null){
            return ResponseEntity.ok(opt);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
    //to add item into cart
    @PostMapping("/addCart")
    public ResponseEntity<?> addCart(@RequestBody Cart cNew){
        Cart c = cartServ.addCart(cNew);
        return new ResponseEntity<Cart>(c, HttpStatus.OK);
    }

    @DeleteMapping("/del/{cartId}/{userId}")
    public ResponseEntity<String> deleteCart(@PathVariable Long cartid, @PathVariable Long userid) {
        cartServ.deleteCartByCartIdAndUserId(cartid, userid);
        return ResponseEntity.ok("Cart deleted successfully.");
    }


    //to increment the quantity of items in cart
    @CrossOrigin
    @PutMapping("/incrementUpdateQuantity/{cartid}")
    public ResponseEntity<Cart> iupdateQuantity(@PathVariable Long cartid){
        return ResponseEntity.ok(cartServ.iupdateQuantity(cartid));
    }
    //to decrement the quantity of items in cart
    @CrossOrigin
    @PutMapping("/decrementUpdateQuantity/{cartid}")
    public ResponseEntity<Cart> dupdateQuantity(@PathVariable Long cartid){
        return ResponseEntity.ok(cartServ.dupdateQuantity(cartid));
    }

    @GetMapping("/gettotal/{cartid}")
    public ResponseEntity<Long> getTotal(@PathVariable Long cartid){
        return ResponseEntity.ok(cartServ.getTotalAmount(cartid));
    }

}
