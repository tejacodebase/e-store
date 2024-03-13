package com.arts.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Objects;

@Entity
public class Arts {
    @GeneratedValue(strategy = GenerationType.UUID)
    @Id
    @Column(name = "uuid")
    private String uuid;
    @Basic
    @Column(name = "title")
    private String title;
    @Basic
    @Column(name = "art_category_uuid")
    private String artCategoryUuid;
    @Basic
    @Column(name = "short_descreption")
    private String shortDescreption;
    @Basic
    @Column(name = "long_descreption")
    private String longDescreption;
    @Basic
    @Column(name = "art_length")
    private Double artLength;
    @Basic
    @Column(name = "width")
    private Double width;
    @Basic
    @Column(name = "height")
    private Double height;
    @Basic
    @Column(name = "category")
    private String category;
    @Basic
    @Column(name = "medium")
    private String medium;
    @Basic
    @Column(name = "weight")
    private Double weight;
    @Basic
    @Column(name = "copy_price")
    private Double copyPrice;
    @Basic
    @Column(name = "price")
    private Double price;
    @Basic
    @Column(name = "package_charges")
    private Double packageCharges;
    @Basic
    @Column(name = "discount")
    private Double discount;
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
    @Column(name = "status")
    private String status;
    @Basic
    @Column(name = "ref1")
    private String ref1;
    @Basic
    @Column(name = "ref2")
    private String ref2;
    @Basic
    @Column(name = "ref3")
    private String ref3;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArtCategoryUuid() {
        return artCategoryUuid;
    }

    public void setArtCategoryUuid(String artCategoryUuid) {
        this.artCategoryUuid = artCategoryUuid;
    }

    public String getShortDescreption() {
        return shortDescreption;
    }

    public void setShortDescreption(String shortDescreption) {
        this.shortDescreption = shortDescreption;
    }

    public String getLongDescreption() {
        return longDescreption;
    }

    public void setLongDescreption(String longDescreption) {
        this.longDescreption = longDescreption;
    }

    public Double getArtLength() {
        return artLength;
    }

    public void setArtLength(Double artLength) {
        this.artLength = artLength;
    }

    public Double getWidth() {
        return width;
    }

    public void setWidth(Double width) {
        this.width = width;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getMedium() {
        return medium;
    }

    public void setMedium(String medium) {
        this.medium = medium;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Double getCopyPrice() {
        return copyPrice;
    }

    public void setCopyPrice(Double copyPrice) {
        this.copyPrice = copyPrice;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getPackageCharges() {
        return packageCharges;
    }

    public void setPackageCharges(Double packageCharges) {
        this.packageCharges = packageCharges;
    }

    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getRef1() {
        return ref1;
    }

    public void setRef1(String ref1) {
        this.ref1 = ref1;
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
        Arts arts = (Arts) o;
        return Objects.equals(uuid, arts.uuid) && Objects.equals(title, arts.title) && Objects.equals(artCategoryUuid, arts.artCategoryUuid) && Objects.equals(shortDescreption, arts.shortDescreption) && Objects.equals(longDescreption, arts.longDescreption) && Objects.equals(artLength, arts.artLength) && Objects.equals(width, arts.width) && Objects.equals(height, arts.height) && Objects.equals(category, arts.category) && Objects.equals(medium, arts.medium) && Objects.equals(weight, arts.weight) && Objects.equals(copyPrice, arts.copyPrice) && Objects.equals(price, arts.price) && Objects.equals(packageCharges, arts.packageCharges) && Objects.equals(discount, arts.discount) && Objects.equals(homeVisibility, arts.homeVisibility) && Objects.equals(sortOrder, arts.sortOrder) && Objects.equals(imageUrl, arts.imageUrl) && Arrays.equals(image, arts.image) && Objects.equals(imageUuid, arts.imageUuid) && Objects.equals(status, arts.status) && Objects.equals(ref1, arts.ref1) && Objects.equals(ref2, arts.ref2) && Objects.equals(ref3, arts.ref3) && Objects.equals(activeFlag, arts.activeFlag) && Objects.equals(createdBy, arts.createdBy) && Objects.equals(createdDate, arts.createdDate) && Objects.equals(modifiedBy, arts.modifiedBy) && Objects.equals(modifiedDate, arts.modifiedDate) && Objects.equals(deletedBy, arts.deletedBy) && Objects.equals(deletedDate, arts.deletedDate) && Objects.equals(deleteFlag, arts.deleteFlag);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(uuid, title, artCategoryUuid, shortDescreption, longDescreption, artLength, width, height, category, medium, weight, copyPrice, price, packageCharges, discount, homeVisibility, sortOrder, imageUrl, imageUuid, status, ref1, ref2, ref3, activeFlag, createdBy, createdDate, modifiedBy, modifiedDate, deletedBy, deletedDate, deleteFlag);
        result = 31 * result + Arrays.hashCode(image);
        return result;
    }

    @Override
    public String toString() {
        return "Arts [uuid=" + uuid + ", title=" + title + ", artCategoryUuid=" + artCategoryUuid
                + ", shortDescreption=" + shortDescreption + ", longDescreption=" + longDescreption + ", artLength="
                + artLength + ", width=" + width + ", height=" + height + ", category=" + category + ", medium="
                + medium + ", weight=" + weight + ", copyPrice=" + copyPrice + ", price=" + price + ", packageCharges="
                + packageCharges + ", discount=" + discount + ", homeVisibility=" + homeVisibility + ", sortOrder="
                + sortOrder + ", imageUrl=" + imageUrl + ", image=" + ", imageUuid="
                + imageUuid + ", status=" + status + ", ref1=" + ref1 + ", ref2=" + ref2 + ", ref3=" + ref3
                + ", activeFlag=" + activeFlag + ", createdBy=" + createdBy + ", createdDate=" + createdDate
                + ", modifiedBy=" + modifiedBy + ", modifiedDate=" + modifiedDate + ", deletedBy=" + deletedBy
                + ", deletedDate=" + deletedDate + ", deleteFlag=" + deleteFlag + "]";
    }

    
}
