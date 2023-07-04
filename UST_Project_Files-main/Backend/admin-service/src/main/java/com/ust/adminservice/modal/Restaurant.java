package com.ust.adminservice.modal;

import javax.persistence.*;

@Entity
@Table(name = "restaurant")
public class Restaurant {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String restName;
    private String restAddress;
    private String restContact;
    private String restPic;

    public Restaurant(Long id, String restName, String restAddress, String restContact, String restPic) {
        this.id = id;
        this.restName = restName;
        this.restAddress = restAddress;
        this.restContact = restContact;
        this.restPic = restPic;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRestName() {
        return restName;
    }

    public void setRestName(String restName) {
        this.restName = restName;
    }

    public String getRestAddress() {
        return restAddress;
    }

    public void setRestAddress(String restAddress) {
        this.restAddress = restAddress;
    }

    public String getRestContact() {
        return restContact;
    }

    public void setRestContact(String restContact) {
        this.restContact = restContact;
    }

    public String getRestPic() {
        return restPic;
    }

    public void setRestPic(String restPic) {
        this.restPic = restPic;
    }

    public Restaurant() {
    }

}
