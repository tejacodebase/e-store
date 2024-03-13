package com.arts.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;

import java.util.Objects;

@Entity
@Table(name = "role_defs", schema = "earts", catalog = "")
public class RoleDefs {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "uuid")
    private String uuid;
    @Basic
    @Column(name = "role_uuid")
    private String roleUuid;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "read_flag")
    private Byte readFlag;
    @Basic
    @Column(name = "write_flag")
    private Byte writeFlag;

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getRoleUuid() {
        return roleUuid;
    }

    public void setRoleUuid(String roleUuid) {
        this.roleUuid = roleUuid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Byte getReadFlag() {
        return readFlag;
    }

    public void setReadFlag(Byte readFlag) {
        this.readFlag = readFlag;
    }

    public Byte getWriteFlag() {
        return writeFlag;
    }

    public void setWriteFlag(Byte writeFlag) {
        this.writeFlag = writeFlag;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RoleDefs roleDefs = (RoleDefs) o;
        return Objects.equals(uuid, roleDefs.uuid) && Objects.equals(roleUuid, roleDefs.roleUuid) && Objects.equals(name, roleDefs.name) && Objects.equals(readFlag, roleDefs.readFlag) && Objects.equals(writeFlag, roleDefs.writeFlag);
    }

    @Override
    public int hashCode() {
        return Objects.hash(uuid, roleUuid, name, readFlag, writeFlag);
    }
}
