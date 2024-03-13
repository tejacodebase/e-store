package com.arts.repository;

import com.arts.entity.RoleDefs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoleDefsRepository extends JpaRepository<RoleDefs, String> {

    Optional<List<RoleDefs>> findByRoleUuid(String roleUuid);
}
