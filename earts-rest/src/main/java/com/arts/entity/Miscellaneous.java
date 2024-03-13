package com.arts.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;

import java.sql.Timestamp;
import java.util.Objects;

@Entity
public class Miscellaneous {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "group_id")
    private String groupId;
    @Basic
    @Column(name = "code")
    private String code;
    @Basic
    @Column(name = "code_name")
    private String codeName;
    @Basic
    @Column(name = "type")
    private Integer type;
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
    @Column(name = "creation_date_time")
    private Timestamp creationDateTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCodeName() {
        return codeName;
    }

    public void setCodeName(String codeName) {
        this.codeName = codeName;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
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

    public Timestamp getCreationDateTime() {
        return creationDateTime;
    }

    public void setCreationDateTime(Timestamp creationDateTime) {
        this.creationDateTime = creationDateTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Miscellaneous that = (Miscellaneous) o;
        return id == that.id && Objects.equals(groupId, that.groupId) && Objects.equals(code, that.code) && Objects.equals(codeName, that.codeName) && Objects.equals(type, that.type) && Objects.equals(ref1, that.ref1) && Objects.equals(ref2, that.ref2) && Objects.equals(ref3, that.ref3) && Objects.equals(creationDateTime, that.creationDateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, groupId, code, codeName, type, ref1, ref2, ref3, creationDateTime);
    }
}
