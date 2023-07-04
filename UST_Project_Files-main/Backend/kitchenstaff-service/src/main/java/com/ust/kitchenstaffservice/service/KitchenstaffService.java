package com.ust.kitchenstaffservice.service;

import com.ust.kitchenstaffservice.exception.CartNotFoundException;
import com.ust.kitchenstaffservice.modal.Kitchenstaff;
import com.ust.kitchenstaffservice.repository.KitchenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KitchenstaffService {

    @Autowired
    private KitchenRepo kitchenRepo;

    public Kitchenstaff addOrders(Kitchenstaff kitchen) {
        return kitchenRepo.save(kitchen);
    }

    public List<Kitchenstaff> getAllOrders() {
        return kitchenRepo.findAll();
    }

    public List<Kitchenstaff> getAllOrdersbyRestuarentname(String restname) {
        return kitchenRepo.findAllByRestname(restname);
    }

    public Kitchenstaff updateStatus(Long userid, Kitchenstaff kitchen) throws CartNotFoundException {
        Kitchenstaff exist = null;
        Optional<Kitchenstaff> opt = kitchenRepo.findByUserid(userid);
        if(opt.isPresent()){
            exist = opt.get();
            exist.setStatus(kitchen.getStatus());
        }
        else{
            throw new CartNotFoundException("no order yet");
        }
        return kitchenRepo.save(exist);
    }
}
