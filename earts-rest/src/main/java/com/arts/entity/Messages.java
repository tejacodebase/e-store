package com.arts.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;

import java.sql.Timestamp;
import java.util.Objects;

@Entity
public class Messages {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "uuid")
    private String uuid;
    @Basic
    @Column(name = "user_uuid")
    private String userUuid;
    @Basic
    @Column(name = "subject")
    private String subject;
    @Basic
    @Column(name = "message")
    private String message;
    @Basic
    @Column(name = "from_name")
    private String fromName;
    @Basic
    @Column(name = "from_email")
    private String fromEmail;
    @Basic
    @Column(name = "phone_number")
    private String phoneNumber;
    @Basic
    @Column(name = "read_flag")
    private Byte readFlag;
    @Basic
    @Column(name = "delete_flag")
    private Byte deleteFlag;
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
    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getFromName() {
        return fromName;
    }

    public void setFromName(String fromName) {
        this.fromName = fromName;
    }

    public String getFromEmail() {
        return fromEmail;
    }

    public void setFromEmail(String fromEmail) {
        this.fromEmail = fromEmail;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Byte getReadFlag() {
        return readFlag;
    }

    public void setReadFlag(Byte readFlag) {
        this.readFlag = readFlag;
    }

    public Byte getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Byte deleteFlag) {
        this.deleteFlag = deleteFlag;
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
        Messages messages = (Messages) o;
        return Objects.equals(uuid, messages.uuid) && Objects.equals(subject, messages.subject) && Objects.equals(message, messages.message) && Objects.equals(fromName, messages.fromName) && Objects.equals(fromEmail, messages.fromEmail) && Objects.equals(phoneNumber, messages.phoneNumber) && Objects.equals(readFlag, messages.readFlag) && Objects.equals(deleteFlag, messages.deleteFlag) && Objects.equals(createdDate, messages.createdDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(uuid, subject, message, fromName, fromEmail, phoneNumber, readFlag, deleteFlag, createdDate);
    }
}
