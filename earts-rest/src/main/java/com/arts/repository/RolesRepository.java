package com.arts.repository;

import com.arts.entity.RoleDefs;
import com.arts.entity.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RolesRepository extends JpaRepository<Roles, String> {

    Optional<List<Roles>> findByUserUuid(String userUuid);

    @Query("SELECT rd FROM Roles r " +
            "JOIN RoleDefs rd ON r.uuid = rd.roleUuid "+
            "WHERE rd.roleUuid IN (select uuid from Roles where userUuid = :userUuid)"
    )
    public List<RoleDefs> findRoleDefinitions(String userUuid);
}
