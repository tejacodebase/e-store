package com.arts.repository;

import com.arts.entity.Orders;
import com.arts.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, String> {
    Optional<List<Orders>> findByUserUuid(String userUuid);
}
