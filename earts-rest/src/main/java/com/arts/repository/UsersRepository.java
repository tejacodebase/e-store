package com.arts.repository;

import com.arts.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<User, String> {

    Optional<User> findByUserIdAndPassword(String username, String password);
}
