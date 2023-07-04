package com.ust.menuservice.modal;

import javax.persistence.*;

@Entity
@Table(name = "menu")
public class Menu {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long mid;
    private String mname;

    private Long mprice;
    private String mpic;

    private String restname;

    public Long getMid() {
        return mid;
    }

    public void setMid(Long mid) {
        this.mid = mid;
    }

    public String getMname() {
        return mname;
    }

    public void setMname(String mname) {
        this.mname = mname;
    }

    public Long getMprice() {
        return mprice;
    }

    public void setMprice(Long mprice) {
        this.mprice = mprice;
    }

    public String getMpic() {
        return mpic;
    }

    public void setMpic(String mpic) {
        this.mpic = mpic;
    }

    public String getRestname() {
        return restname;
    }

    public void setRestname(String restname) {
        this.restname = restname;
    }

    public Menu(Long mid, String mname, Long mprice, String mpic, String restname) {
        this.mid = mid;
        this.mname = mname;
        this.mprice = mprice;
        this.mpic = mpic;
        this.restname = restname;
    }

    public Menu() {
    }

}
