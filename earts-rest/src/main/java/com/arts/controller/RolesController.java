package com.arts.controller;

import com.arts.config.ApplicationProperties;
import com.arts.entity.RoleDefs;
import com.arts.entity.Roles;
import com.arts.service.RolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Objects;

@RestController
public class RolesController {

    private final RolesService rolesService;

    @Autowired
    public RolesController(RolesService rolesService, ApplicationProperties appProps) {
        this.rolesService = rolesService;
    }

    @GetMapping(path = "/roles", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Roles> getRoles(@RequestParam(value = "userUuid", required = false) String userUuid) {
        if(Objects.nonNull(userUuid)) {
            return rolesService.getRolesByUserUuid(userUuid);
        } else {
            return rolesService.getRoles();
        }
    }

    @GetMapping(path = "/roles/{uuid}/role-definitions", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<RoleDefs> getRoleDefinitions(@PathVariable(value = "uuid") String roleUuid) {
        return rolesService.getRoleDefinitions(roleUuid);
    }

    @GetMapping(path = "/users/{uuid}/role-definitions", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<RoleDefs> getRoleDetails(@PathVariable(value = "uuid") String uuid) {
        return rolesService.getRoleDefsByUserUuid(uuid);
    }

    @GetMapping(path = "/roles/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Roles getRole(@PathVariable String uuid) {
        return rolesService.getRole(uuid);
    }

    @PutMapping(path = "/roles/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Roles editRole(@PathVariable String uuid, @RequestBody Roles role) {
        return rolesService.editRole(uuid, role);
    }

    @PostMapping(path = "/roles", produces = MediaType.APPLICATION_JSON_VALUE)
    public Roles createRole(@RequestBody Roles role) {
        return rolesService.createRole(role);
    }

    @DeleteMapping(path = "/roles/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String deleteRole(@PathVariable String uuid) {
        return rolesService.deleteRole(uuid);
    }
}
