package com.arts.controller;

import com.arts.config.ApplicationProperties;
import com.arts.entity.User;
import com.arts.service.OrdersService;
import com.arts.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class UsersController {

    private final UsersService usersService;
    private final OrdersService ordersService;

    @Autowired
    public UsersController(UsersService usersService, OrdersService ordersService, ApplicationProperties appProps) {
        this.usersService = usersService;
        this.ordersService = ordersService;
    }


    @GetMapping(path = "/users", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getUsers() {
        return usersService.getUsers();
    }

    @GetMapping(path = "/users/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public User getUser(@PathVariable String uuid) {
        return usersService.getUser(uuid);
    }

    @PostMapping(path = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("userId");
        String password = credentials.get("password");
        boolean isAuthenticated = usersService.authenticateUser(username, password);
        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @PutMapping(path = "/users/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public User editUser(@PathVariable String uuid, @RequestBody User user) {
        return usersService.editUser(uuid, user);
    }

    @PostMapping(path = "/users", produces = MediaType.APPLICATION_JSON_VALUE)
    public User createUser(@RequestBody User user) {
        return usersService.createUser(user);
    }

    @DeleteMapping(path = "/users/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String deleteUser(@PathVariable String uuid) {
        return usersService.deleteUser(uuid);
    }
}
