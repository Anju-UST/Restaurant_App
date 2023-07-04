package com.ust.kitchenstaffservice.modal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kitchenstaff")
public class Kitchenstaff {

    @Id
    @GeneratedValue
    private int id;
    private Long userid;
    private String restname;
    private String prodname;
    private String status;

    public Kitchenstaff(int id, Long userid, String restname, String prodname, String status) {
        this.id = id;
        this.userid = userid;
        this.restname = restname;
        this.prodname = prodname;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public String getRestname() {
        return restname;
    }

    public void setRestname(String restname) {
        this.restname = restname;
    }

    public String getProdname() {
        return prodname;
    }

    public void setProdname(String prodname) {
        this.prodname = prodname;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Kitchenstaff() {
    }
}
