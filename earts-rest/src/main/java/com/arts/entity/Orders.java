package com.arts.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;

import java.sql.Timestamp;
import java.util.Objects;

@Entity
public class Orders {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "uuid")
    private String uuid;
    @Basic
    @Column(name = "order_uuid")
    private String orderUuid;
    @Basic
    @Column(name = "user_uuid")
    private String userUuid;
    @Basic
    @Column(name = "payment_uuid")
    private String paymentUuid;
    @Basic
    @Column(name = "address_uuid")
    private String addressUuid;
    @Basic
    @Column(name = "order_date")
    private Timestamp orderDate;
    @Basic
    @Column(name = "sales_tax")
    private Double salesTax;
    @Basic
    @Column(name = "delivery_charges")
    private Double deliveryCharges;
    @Basic
    @Column(name = "total_amount")
    private Double totalAmount;
    @Basic
    @Column(name = "ship_date")
    private Timestamp shipDate;
    @Basic
    @Column(name = "phone")
    private String phone;
    @Basic
    @Column(name = "email")
    private String email;
    @Basic
    @Column(name = "shipped")
    private byte shipped;
    @Basic
    @Column(name = "tracking_number")
    private String trackingNumber;
    @Basic
    @Column(name = "order_status")
    private String orderStatus;
    @Basic
    @Column(name = "payment_status")
    private String paymentStatus;
    @Basic
    @Column(name = "created_by")
    private String createdBy;
    @Basic
    @Column(name = "created_dtt")
    private Timestamp createdDtt;
    @Basic
    @Column(name = "modified_by")
    private String modifiedBy;
    @Basic
    @Column(name = "modified_dtt")
    private Timestamp modifiedDtt;
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

    public String getOrderUuid() {
        return orderUuid;
    }

    public void setOrderUuid(String orderUuid) {
        this.orderUuid = orderUuid;
    }

    public String getUserUuid() {
        return userUuid;
    }

    public void setUserUuid(String userUuid) {
        this.userUuid = userUuid;
    }

    public String getPaymentUuid() {
        return paymentUuid;
    }

    public void setPaymentUuid(String paymentUuid) {
        this.paymentUuid = paymentUuid;
    }

    public String getAddressUuid() {
        return addressUuid;
    }

    public void setAddressUuid(String addressUuid) {
        this.addressUuid = addressUuid;
    }

    public Timestamp getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Timestamp orderDate) {
        this.orderDate = orderDate;
    }

    public Double getSalesTax() {
        return salesTax;
    }

    public void setSalesTax(Double salesTax) {
        this.salesTax = salesTax;
    }

    public Double getDeliveryCharges() {
        return deliveryCharges;
    }

    public void setDeliveryCharges(Double deliveryCharges) {
        this.deliveryCharges = deliveryCharges;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Timestamp getShipDate() {
        return shipDate;
    }

    public void setShipDate(Timestamp shipDate) {
        this.shipDate = shipDate;
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

    public byte getShipped() {
        return shipped;
    }

    public void setShipped(byte shipped) {
        this.shipped = shipped;
    }

    public String getTrackingNumber() {
        return trackingNumber;
    }

    public void setTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Timestamp getCreatedDtt() {
        return createdDtt;
    }

    public void setCreatedDtt(Timestamp createdDtt) {
        this.createdDtt = createdDtt;
    }

    public String getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    public Timestamp getModifiedDtt() {
        return modifiedDtt;
    }

    public void setModifiedDtt(Timestamp modifiedDtt) {
        this.modifiedDtt = modifiedDtt;
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
        Orders orders = (Orders) o;
        return shipped == orders.shipped && Objects.equals(uuid, orders.uuid) && Objects.equals(orderUuid, orders.orderUuid) && Objects.equals(userUuid, orders.userUuid) && Objects.equals(paymentUuid, orders.paymentUuid) && Objects.equals(addressUuid, orders.addressUuid) && Objects.equals(orderDate, orders.orderDate) && Objects.equals(salesTax, orders.salesTax) && Objects.equals(deliveryCharges, orders.deliveryCharges) && Objects.equals(totalAmount, orders.totalAmount) && Objects.equals(shipDate, orders.shipDate) && Objects.equals(phone, orders.phone) && Objects.equals(email, orders.email) && Objects.equals(trackingNumber, orders.trackingNumber) && Objects.equals(orderStatus, orders.orderStatus) && Objects.equals(paymentStatus, orders.paymentStatus) && Objects.equals(createdBy, orders.createdBy) && Objects.equals(createdDtt, orders.createdDtt) && Objects.equals(modifiedBy, orders.modifiedBy) && Objects.equals(modifiedDtt, orders.modifiedDtt) && Objects.equals(activeFlag, orders.activeFlag) && Objects.equals(deleteFlag, orders.deleteFlag);
    }

    @Override
    public int hashCode() {
        return Objects.hash(uuid, orderUuid, userUuid, paymentUuid, addressUuid, orderDate, salesTax, deliveryCharges, totalAmount, shipDate, phone, email, shipped, trackingNumber, orderStatus, paymentStatus, createdBy, createdDtt, modifiedBy, modifiedDtt, activeFlag, deleteFlag);
    }
}
