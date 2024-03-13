package com.arts.service;

import com.arts.entity.RoleDefs;
import com.arts.entity.Roles;
import com.arts.exception.BadRequestException;
import com.arts.exception.ResourceNotFoundException;
import com.arts.repository.RoleDefsRepository;
import com.arts.repository.RolesRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import static org.apache.commons.lang3.StringUtils.isEmpty;

@Service
@Slf4j
public class RolesService {

    private final RolesRepository rolesRepository;
    private final RoleDefsRepository roleDefsRepository;

    @Autowired
    public RolesService(RolesRepository rolesRepository, RoleDefsRepository roleDefsRepository) {
        this.rolesRepository = rolesRepository;
        this.roleDefsRepository = roleDefsRepository;
    }

    public List<Roles> getRoles() {
        return (List<Roles>) rolesRepository.findAll();
    }

    public List<RoleDefs> getRoleDefinitions(String roleUuid) {
        Optional<List<RoleDefs>> roleDefinationsOptional = roleDefsRepository.findByRoleUuid(roleUuid);
        return roleDefinationsOptional.map(roleDefs -> roleDefs.stream().toList()).orElse(null);
    }

    public List<RoleDefs> getRoleDefsByUserUuid(String userUuid) {
        return rolesRepository.findRoleDefinitions(userUuid);
    }

    public List<Roles> getRolesByUserUuid(String userUuid) {
        Optional<List<Roles>> rolesOptional = rolesRepository.findByUserUuid(userUuid);
        return rolesOptional.map(roles -> roles.stream().toList()).orElse(null);
    }

    public Roles getRole(String uuid) {
        return rolesRepository.findById(uuid).orElse(null);
    }

    public Roles createRole(Roles role) {
        role.setUuid(UUID.randomUUID().toString());
//        if (rolesRepository.existsByUuid(role.getUuid())) {
//            throw new ResourceExistsException("409000", "Role exists with same Id");
//        }
        return rolesRepository.save(role);
    }

    public Roles editRole(String uuid, Roles role) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Role Id cannot be empty");
        }
        if (!rolesRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Role not found with Id");
        }
        role.setUuid(uuid);
        return rolesRepository.save(role);
    }

    public String deleteRole(String uuid) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Role Id cannot be empty");
        }
        if (!rolesRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Role not found with Id");
        }
        rolesRepository.deleteById(uuid);
        return uuid;
    }
}
