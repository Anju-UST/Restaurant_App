package com.ust.menuservice.repository;

import com.ust.menuservice.modal.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<Menu,Long> {
    List<Menu> findByRestname(String restname);
}
