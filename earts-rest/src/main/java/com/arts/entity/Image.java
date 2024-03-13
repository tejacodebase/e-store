package com.arts.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Objects;

@Entity
public class Image {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "uuid")
    private String uuid;
    @Basic
    @Column(name = "type")
    private String type;
    @Basic
    @Column(name = "source_uuid")
    private String sourceUuid;
    @Basic
    @Column(name = "url")
    private String url;
    @Basic
    @Column(name = "file_name")
    private String fileName;
    @Basic
    @Column(name = "base_image")
    private String baseImage;
    @Basic
    @Column(name = "image")
    private byte[] image;
    @Basic
    @Column(name = "status")
    private String status;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSourceUuid() {
        return sourceUuid;
    }

    public void setSourceUuid(String sourceUuid) {
        this.sourceUuid = sourceUuid;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getBaseImage() {
        return baseImage;
    }

    public void setBaseImage(String baseImage) {
        this.baseImage = baseImage;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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
        Image image1 = (Image) o;
        return Objects.equals(uuid, image1.uuid) && Objects.equals(type, image1.type) && Objects.equals(sourceUuid, image1.sourceUuid) && Objects.equals(url, image1.url) && Objects.equals(fileName, image1.fileName) && Objects.equals(baseImage, image1.baseImage) && Arrays.equals(image, image1.image) && Objects.equals(status, image1.status) && Objects.equals(activeFlag, image1.activeFlag) && Objects.equals(createdBy, image1.createdBy) && Objects.equals(createdDate, image1.createdDate) && Objects.equals(modifiedBy, image1.modifiedBy) && Objects.equals(modifiedDate, image1.modifiedDate) && Objects.equals(deletedBy, image1.deletedBy) && Objects.equals(deletedDate, image1.deletedDate) && Objects.equals(deleteFlag, image1.deleteFlag);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(uuid, type, sourceUuid, url, fileName, baseImage, status, activeFlag, createdBy, createdDate, modifiedBy, modifiedDate, deletedBy, deletedDate, deleteFlag);
        result = 31 * result + Arrays.hashCode(image);
        return result;
    }
}
