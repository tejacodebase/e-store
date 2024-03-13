package com.arts.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;

import java.sql.Timestamp;
import java.util.Objects;

@Entity
public class Roles {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "uuid")
    private String uuid;

    @Basic
    @Column(name = "user_uuid")
    private String userUuid;
    @Basic
    @Column(name = "id")
    private String id;
    @Basic
    @Column(name = "display_name")
    private String displayName;
    @Basic
    @Column(name = "is_active")
    private Byte isActive;
    @Basic
    @Column(name = "created_date")
    private Timestamp createdDate;

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

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public Byte getIsActive() {
        return isActive;
    }

    public void setIsActive(Byte isActive) {
        this.isActive = isActive;
    }

    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Roles roles = (Roles) o;
        return Objects.equals(uuid, roles.uuid) && Objects.equals(id, roles.id) && Objects.equals(displayName, roles.displayName) && Objects.equals(isActive, roles.isActive) && Objects.equals(createdDate, roles.createdDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(uuid, id, displayName, isActive, createdDate);
    }
}
