package com.arts.service;

import com.arts.entity.Address;
import com.arts.exception.BadRequestException;
import com.arts.exception.ResourceNotFoundException;
import com.arts.repository.AddressRepository;
import com.arts.repository.UsersRepository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import static org.apache.commons.lang3.StringUtils.isEmpty;


@Service
@Slf4j
public class AddressesService {

    private final AddressRepository addressRepository;
    private final UsersRepository userRepository;

    @Autowired
    public AddressesService(AddressRepository addressRepository, UsersRepository userRepository) {
        this.addressRepository = addressRepository;
        this.userRepository = userRepository;
    }

    public List<Address> getAddress() {
        return (List<Address>) addressRepository.findAll();
    }

    public List<Address> getAddressByUserUuid(String userUuid) {
        Optional<List<Address>> addressOptional = addressRepository.findByUserUuid(userUuid);
        return addressOptional.map(address -> address.stream().toList()).orElse(null);
    }

    public Address getAddress(String uuid) {
        return addressRepository.findById(uuid).orElse(null);
    }

    public Address createAddress(Address address) {
        address.setUuid(UUID.randomUUID().toString());
//        if (addressRepository.existsByUuid(address.getUuid())) {
//            throw new ResourceExistsException("409000", "Address exists with same Id");
//        }
        return addressRepository.save(address);
    }

    public Address editAddress(String uuid, Address address) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Address Id cannot be empty");
        }
        if (!addressRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Address not found with Id");
        }
        address.setUuid(uuid);
        return addressRepository.save(address);
    }

    public String deleteAddress(String uuid) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Address Id cannot be empty");
        }
        if (!addressRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Address not found with Id");
        }

        synchronized (addressRepository) {
            
        }

        synchronized (userRepository) {
            
        }

        addressRepository.deleteById(uuid);
        return uuid;
    }


}
