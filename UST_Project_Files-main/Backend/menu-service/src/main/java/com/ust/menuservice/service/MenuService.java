package com.ust.menuservice.service;

import com.ust.menuservice.modal.Menu;
import com.ust.menuservice.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;
    public Menu addMenu(Menu menu) {
        return menuRepository.save(menu);
    }

    public Menu updateMenu(Long mid, Menu menu) {
        Menu temp=null;
        Optional<Menu> op1=menuRepository.findById(mid);
        if(op1.isPresent()) {
            temp=op1.get();
            temp.setMname(menu.getMname());
            temp.setMpic(menu.getMpic());
            temp.setMprice(menu.getMprice());
            temp.setRestname(menu.getRestname());
            Menu menu3=menuRepository.save(temp);
            return menu3;
        }
        else
        {
            return null;
        }
    }

    public List<Menu> getByRestname(String restname) {
        return menuRepository.findByRestname(restname);
    }

    public List<Menu> getAllMenu() {
        return menuRepository.findAll();
    }


    public Menu getByMenuid(Long mid) {
        Optional<Menu> op=menuRepository.findById(mid);
        if(op.isPresent()) {
            return op.get();
        }
        else
            return	null;
    }

    public void deleteMenu(Long mid) {
        menuRepository.deleteById(mid);
    }
}
