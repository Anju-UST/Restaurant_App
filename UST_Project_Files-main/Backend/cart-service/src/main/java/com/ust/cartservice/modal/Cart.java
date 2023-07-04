package com.ust.cartservice.modal;

import javax.persistence.*;

@Entity
@Table(name = "cart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cartid")
    private long cartid;

    @Column(name = "userid")
    private Long userid;
    @Column(name = "restname")
    private String restname;
    @Column(name = "prodid")
    private Long prodid;

    @Column(name = "prodname")
    private String prodname;

    @Column(name = "price")
    private Long price;

    private String status;
    private Long quantity;

    @Column(name = "mpic")
    private String mpic;

    @Column(name = "total")
    private Long total;

    public Cart() {

    }

    public Long getCartid() {
        return cartid;
    }

    public void setCartid(Long cartid) {
        this.cartid = cartid;
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

    public Long getProdid() {
        return prodid;
    }

    public void setProdid(Long prodid) {
        this.prodid = prodid;
    }

    public String getProdname() {
        return prodname;
    }

    public void setProdname(String prodname) {
        this.prodname = prodname;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public String getMpic() {
        return mpic;
    }

    public void setMpic(String mpic) {
        this.mpic = mpic;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    public Cart(Long cartid, Long userid, String restname, Long prodid, String prodname, Long price, String status, Long quantity, String mpic, Long total) {
        this.cartid = cartid;
        this.userid = userid;
        this.restname = restname;
        this.prodid = prodid;
        this.prodname = prodname;
        this.price = price;
        this.status = status;
        this.quantity = quantity;
        this.mpic = mpic;
        this.total = total;
    }
}
