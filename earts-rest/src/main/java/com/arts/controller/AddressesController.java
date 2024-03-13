package com.arts.controller;

import com.arts.config.ApplicationProperties;
import com.arts.entity.Address;
import com.arts.service.AddressesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Objects;

@RestController
public class AddressesController {

    private final AddressesService addressesService;

    @Autowired
    public AddressesController(AddressesService addressesService, ApplicationProperties appProps) {
        this.addressesService = addressesService;
    }

    @GetMapping(path = "/addresses", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Address> getAddresses(@RequestParam(value = "userUuid", required = false) String userUuid) {
        if(Objects.nonNull(userUuid)) {
            return addressesService.getAddressByUserUuid(userUuid);
        } else {
            // return addressesService.getAddress();
            return null;
        }
    }

    @GetMapping(path = "/addresses/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Address getAddress(@PathVariable String uuid) {
        return addressesService.getAddress(uuid);
    }

    @PutMapping(path = "/addresses/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Address editAddress(@PathVariable String uuid, @RequestBody Address address) {
        return addressesService.editAddress(uuid, address);
    }

    @PostMapping(path = "/addresses", produces = MediaType.APPLICATION_JSON_VALUE)
    public Address createAddress(@RequestBody Address address) {
        return addressesService.createAddress(address);
    }

    @DeleteMapping(path = "/addresses/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String deleteAddress(@PathVariable String uuid) {
        return addressesService.deleteAddress(uuid);
    }
}
