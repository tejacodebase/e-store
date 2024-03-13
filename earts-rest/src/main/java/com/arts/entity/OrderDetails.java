package com.arts.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;

import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "order_details", schema = "earts", catalog = "")
public class OrderDetails {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "uuid")
    private String uuid;
    @Basic
    @Column(name = "order_uuid")
    private String orderUuid;
    @Basic
    @Column(name = "art_uuid")
    private String artUuid;
    @Basic
    @Column(name = "packing_price")
    private Integer packingPrice;
    @Basic
    @Column(name = "shipping_price")
    private Integer shippingPrice;
    @Basic
    @Column(name = "price")
    private Integer price;
    @Basic
    @Column(name = "is_orginal")
    private Byte isOrginal;
    @Basic
    @Column(name = "ref1")
    private String ref1;
    @Basic
    @Column(name = "active_flag")
    private Byte activeFlag;
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

    public String getOrderUuid() {
        return orderUuid;
    }

    public void setOrderUuid(String orderUuid) {
        this.orderUuid = orderUuid;
    }

    public String getArtUuid() {
        return artUuid;
    }

    public void setArtUuid(String artUuid) {
        this.artUuid = artUuid;
    }

    public Integer getPackingPrice() {
        return packingPrice;
    }

    public void setPackingPrice(Integer packingPrice) {
        this.packingPrice = packingPrice;
    }

    public Integer getShippingPrice() {
        return shippingPrice;
    }

    public void setShippingPrice(Integer shippingPrice) {
        this.shippingPrice = shippingPrice;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Byte getIsOrginal() {
        return isOrginal;
    }

    public void setIsOrginal(Byte isOrginal) {
        this.isOrginal = isOrginal;
    }

    public String getRef1() {
        return ref1;
    }

    public void setRef1(String ref1) {
        this.ref1 = ref1;
    }

    public Byte getActiveFlag() {
        return activeFlag;
    }

    public void setActiveFlag(Byte activeFlag) {
        this.activeFlag = activeFlag;
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
        OrderDetails that = (OrderDetails) o;
        return Objects.equals(uuid, that.uuid) && Objects.equals(orderUuid, that.orderUuid) && Objects.equals(artUuid, that.artUuid) && Objects.equals(packingPrice, that.packingPrice) && Objects.equals(shippingPrice, that.shippingPrice) && Objects.equals(price, that.price) && Objects.equals(isOrginal, that.isOrginal) && Objects.equals(ref1, that.ref1) && Objects.equals(activeFlag, that.activeFlag) && Objects.equals(createdBy, that.createdBy) && Objects.equals(createdDate, that.createdDate) && Objects.equals(modifiedBy, that.modifiedBy) && Objects.equals(modifiedDate, that.modifiedDate) && Objects.equals(deletedBy, that.deletedBy) && Objects.equals(deletedDate, that.deletedDate) && Objects.equals(deleteFlag, that.deleteFlag);
    }

    @Override
    public int hashCode() {
        return Objects.hash(uuid, orderUuid, artUuid, packingPrice, shippingPrice, price, isOrginal, ref1, activeFlag, createdBy, createdDate, modifiedBy, modifiedDate, deletedBy, deletedDate, deleteFlag);
    }
}
