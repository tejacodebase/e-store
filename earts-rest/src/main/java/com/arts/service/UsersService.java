package com.arts.service;

import com.arts.entity.User;
import com.arts.exception.BadRequestException;
import com.arts.exception.ResourceNotFoundException;
import com.arts.repository.UsersRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.apache.commons.lang3.StringUtils.*;


@Service
@Slf4j
public class UsersService {

    private final UsersRepository usersRepository;

    @Autowired
    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<User> getUsers() {
        return (List<User>) usersRepository.findAll();
    }

    public User getUser(String uuid) {
        return usersRepository.findById(uuid).orElse(null);
    }

    public User createUser(User user) {
        user.setUuid(UUID.randomUUID().toString());
        /** No need to check
         if(isEmpty(User.getUuid())){
         throw new BadRequestException("400000", "User Id cannot be empty");
         } **/
//        if (usersRepository.existsByUuid(user.getUuid())) {
//            throw new ResourceExistsException("409000", "User exists with same Id");
//        }
//        User.setIsNew(Boolean.TRUE);
        return usersRepository.save(user);
    }

    public User editUser(String uuid, User user) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "User Id cannot be empty");
        }
        if (!usersRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "User not found with Id");
        }
//        User.setIsNew(Boolean.FALSE);
        user.setUuid(uuid);
        return usersRepository.save(user);
    }

    public String deleteUser(String uuid) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "User Id cannot be empty");
        }
        if (!usersRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "User not found with Id");
        }
        usersRepository.deleteById(uuid);
        return uuid;
    }

    public boolean authenticateUser(String username, String password) {
        Optional<User> userOptional = usersRepository.findByUserIdAndPassword(username, password);
        return userOptional.isPresent(); // Returns true if user exists with the provided username and password
    }
}
