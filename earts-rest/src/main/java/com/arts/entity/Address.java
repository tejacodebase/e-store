package com.arts.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;

import java.util.Objects;

@Entity
public class Address {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "uuid")
    private String uuid;
    @Basic
    @Column(name = "user_uuid")
    private String userUuid;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "phone_no")
    private String phoneNo;
    @Basic
    @Column(name = "address")
    private String address;
    @Basic
    @Column(name = "address2")
    private String address2;
    @Basic
    @Column(name = "city")
    private String city;
    @Basic
    @Column(name = "state")
    private String state;
    @Basic
    @Column(name = "country")
    private String country;
    @Basic
    @Column(name = "pincode")
    private String pincode;
    @Basic
    @Column(name = "landmark")
    private String landmark;
    @Basic
    @Column(name = "active_flag")
    private Byte activeFlag;
    @Basic
    @Column(name = "delete_flag")
    private Byte deleteFlag;

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getUserUuid() {
        return userUuid;
    }

    public void setUserUuid(String userUuid) {
        this.userUuid = userUuid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getLandmark() {
        return landmark;
    }

    public void setLandmark(String landmark) {
        this.landmark = landmark;
    }

    public Byte getActiveFlag() {
        return activeFlag;
    }

    public void setActiveFlag(Byte activeFlag) {
        this.activeFlag = activeFlag;
    }

    public Byte getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Byte deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Address address1 = (Address) o;
        return Objects.equals(uuid, address1.uuid) && Objects.equals(userUuid, address1.userUuid) && Objects.equals(name, address1.name) && Objects.equals(phoneNo, address1.phoneNo) && Objects.equals(address, address1.address) && Objects.equals(address2, address1.address2) && Objects.equals(city, address1.city) && Objects.equals(state, address1.state) && Objects.equals(country, address1.country) && Objects.equals(pincode, address1.pincode) && Objects.equals(landmark, address1.landmark) && Objects.equals(activeFlag, address1.activeFlag) && Objects.equals(deleteFlag, address1.deleteFlag);
    }

    @Override
    public int hashCode() {
        return Objects.hash(uuid, userUuid, name, phoneNo, address, address2, city, state, country, pincode, landmark, activeFlag, deleteFlag);
    }
}
