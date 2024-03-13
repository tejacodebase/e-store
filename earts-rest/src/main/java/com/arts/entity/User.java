package com.arts.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Objects;

@Entity
public class User {
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "uuid")
    private String uuid;
    @Basic
    @Column(name = "user_id")
    private String userId;
    @Basic
    @Column(name = "password")
    private String password;
    @Basic
    @Column(name = "password_str")
    private String passwordStr;
    @Basic
    @Column(name = "type")
    private String type;
    @Basic
    @Column(name = "title")
    private String title;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "last_name")
    private String lastName;
    @Basic
    @Column(name = "role_uuid")
    private String roleUuid;
    @Basic
    @Column(name = "gender")
    private String gender;
    @Basic
    @Column(name = "city")
    private String city;
    @Basic
    @Column(name = "state")
    private String state;
    @Basic
    @Column(name = "address")
    private String address;
    @Basic
    @Column(name = "image")
    private byte[] image;
    @Basic
    @Column(name = "phone")
    private String phone;
    @Basic
    @Column(name = "email")
    private String email;
    @Basic
    @Column(name = "dob")
    private Date dob;
    @Basic
    @Column(name = "is_admin")
    private Byte isAdmin;
    @Basic
    @Column(name = "active_flag")
    private Byte activeFlag;
    @Basic
    @Column(name = "pwd_exp_date")
    private Date pwdExpDate;
    @Basic
    @Column(name = "created_by")
    private String createdBy;
    @Basic
    @Column(name = "created_date")
    private Timestamp createdDate;
    @Basic
    @Column(name = "modified_by")
    private String modifiedBy;
    @Basic
    @Column(name = "modified_date")
    private Timestamp modifiedDate;
    @Basic
    @Column(name = "deleted_by")
    private String deletedBy;
    @Basic
    @Column(name = "deleted_date")
    private Timestamp deletedDate;
    @Basic
    @Column(name = "delete_flag")
    private Byte deleteFlag;

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPasswordStr() {
        return passwordStr;
    }

    public void setPasswordStr(String passwordStr) {
        this.passwordStr = passwordStr;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getRoleUuid() {
        return roleUuid;
    }

    public void setRoleUuid(String roleUuid) {
        this.roleUuid = roleUuid;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public Byte getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(Byte isAdmin) {
        this.isAdmin = isAdmin;
    }

    public Byte getActiveFlag() {
        return activeFlag;
    }

    public void setActiveFlag(Byte activeFlag) {
        this.activeFlag = activeFlag;
    }

    public Date getPwdExpDate() {
        return pwdExpDate;
    }

    public void setPwdExpDate(Date pwdExpDate) {
        this.pwdExpDate = pwdExpDate;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }

    public String getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    public Timestamp getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Timestamp modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    public String getDeletedBy() {
        return deletedBy;
    }

    public void setDeletedBy(String deletedBy) {
        this.deletedBy = deletedBy;
    }

    public Timestamp getDeletedDate() {
        return deletedDate;
    }

    public void setDeletedDate(Timestamp deletedDate) {
        this.deletedDate = deletedDate;
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
        User user = (User) o;
        return Objects.equals(uuid, user.uuid) && Objects.equals(userId, user.userId) && Objects.equals(password, user.password) && Objects.equals(passwordStr, user.passwordStr) && Objects.equals(type, user.type) && Objects.equals(title, user.title) && Objects.equals(name, user.name) && Objects.equals(lastName, user.lastName) && Objects.equals(roleUuid, user.roleUuid) && Objects.equals(gender, user.gender) && Objects.equals(city, user.city) && Objects.equals(state, user.state) && Objects.equals(address, user.address) && Arrays.equals(image, user.image) && Objects.equals(phone, user.phone) && Objects.equals(email, user.email) && Objects.equals(dob, user.dob) && Objects.equals(isAdmin, user.isAdmin) && Objects.equals(activeFlag, user.activeFlag) && Objects.equals(pwdExpDate, user.pwdExpDate) && Objects.equals(createdBy, user.createdBy) && Objects.equals(createdDate, user.createdDate) && Objects.equals(modifiedBy, user.modifiedBy) && Objects.equals(modifiedDate, user.modifiedDate) && Objects.equals(deletedBy, user.deletedBy) && Objects.equals(deletedDate, user.deletedDate) && Objects.equals(deleteFlag, user.deleteFlag);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(uuid, userId, password, passwordStr, type, title, name, lastName, roleUuid, gender, city, state, address, phone, email, dob, isAdmin, activeFlag, pwdExpDate, createdBy, createdDate, modifiedBy, modifiedDate, deletedBy, deletedDate, deleteFlag);
        result = 31 * result + Arrays.hashCode(image);
        return result;
    }
}
