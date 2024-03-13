package com.arts.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Objects;

@Entity
@Table(name = "art_categories", schema = "earts", catalog = "")
public class ArtCategories {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "uuid")
    private String uuid;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "descreption")
    private String descreption;
    @Basic
    @Column(name = "home_visibility")
    private Byte homeVisibility;
    @Basic
    @Column(name = "sort_order")
    private Integer sortOrder;
    @Basic
    @Column(name = "image_url")
    private String imageUrl;
    @Basic
    @Column(name = "image")
    private byte[] image;
    @Basic
    @Column(name = "image_uuid")
    private String imageUuid;
    @Basic
    @Column(name = "ref1")
    private String ref1;
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
    @Basic
    @Column(name = "ref2")
    private String ref2;
    @Basic
    @Column(name = "ref3")
    private String ref3;
    @Basic
    @Column(name = "active_flag")
    private Byte activeFlag;

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescreption() {
        return descreption;
    }

    public void setDescreption(String descreption) {
        this.descreption = descreption;
    }

    public Byte getHomeVisibility() {
        return homeVisibility;
    }

    public void setHomeVisibility(Byte homeVisibility) {
        this.homeVisibility = homeVisibility;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public String getImageUuid() {
        return imageUuid;
    }

    public void setImageUuid(String imageUuid) {
        this.imageUuid = imageUuid;
    }

    public String getRef1() {
        return ref1;
    }

    public void setRef1(String ref1) {
        this.ref1 = ref1;
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

    public String getRef2() {
        return ref2;
    }

    public void setRef2(String ref2) {
        this.ref2 = ref2;
    }

    public String getRef3() {
        return ref3;
    }

    public void setRef3(String ref3) {
        this.ref3 = ref3;
    }

    public Byte getActiveFlag() {
        return activeFlag;
    }

    public void setActiveFlag(Byte activeFlag) {
        this.activeFlag = activeFlag;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ArtCategories that = (ArtCategories) o;
        return Objects.equals(uuid, that.uuid) && Objects.equals(name, that.name) && Objects.equals(descreption, that.descreption) && Objects.equals(homeVisibility, that.homeVisibility) && Objects.equals(sortOrder, that.sortOrder) && Objects.equals(imageUrl, that.imageUrl) && Arrays.equals(image, that.image) && Objects.equals(imageUuid, that.imageUuid) && Objects.equals(ref1, that.ref1) && Objects.equals(createdBy, that.createdBy) && Objects.equals(createdDate, that.createdDate) && Objects.equals(modifiedBy, that.modifiedBy) && Objects.equals(modifiedDate, that.modifiedDate) && Objects.equals(deletedBy, that.deletedBy) && Objects.equals(deletedDate, that.deletedDate) && Objects.equals(deleteFlag, that.deleteFlag) && Objects.equals(ref2, that.ref2) && Objects.equals(ref3, that.ref3) && Objects.equals(activeFlag, that.activeFlag);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(uuid, name, descreption, homeVisibility, sortOrder, imageUrl, imageUuid, ref1, createdBy, createdDate, modifiedBy, modifiedDate, deletedBy, deletedDate, deleteFlag, ref2, ref3, activeFlag);
        result = 31 * result + Arrays.hashCode(image);
        return result;
    }
}
