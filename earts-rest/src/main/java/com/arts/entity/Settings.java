package com.arts.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;

import java.sql.Timestamp;
import java.util.Objects;

@Entity
public class Settings {
    @GeneratedValue(strategy = GenerationType.UUID)
    @Id
    @Column(name = "uuid")
    private String uuid;
    @Basic
    @Column(name = "user_uuid")
    private String userUuid;
    @Basic
    @Column(name = "type")
    private String type;
    @Basic
    @Column(name = "value")
    private String value;
    @Basic
    @Column(name = "is_active")
    private Byte isActive;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Byte getIsActive() {
        return isActive;
    }

    public void setIsActive(Byte isActive) {
        this.isActive = isActive;
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
        Settings settings = (Settings) o;
        return Objects.equals(uuid, settings.uuid) && Objects.equals(type, settings.type) && Objects.equals(value, settings.value) && Objects.equals(isActive, settings.isActive) && Objects.equals(createdBy, settings.createdBy) && Objects.equals(createdDate, settings.createdDate) && Objects.equals(modifiedBy, settings.modifiedBy) && Objects.equals(modifiedDate, settings.modifiedDate) && Objects.equals(deletedBy, settings.deletedBy) && Objects.equals(deletedDate, settings.deletedDate) && Objects.equals(activeFlag, settings.activeFlag) && Objects.equals(deleteFlag, settings.deleteFlag);
    }

    @Override
    public int hashCode() {
        return Objects.hash(uuid, type, value, isActive, createdBy, createdDate, modifiedBy, modifiedDate, deletedBy, deletedDate, activeFlag, deleteFlag);
    }
}
