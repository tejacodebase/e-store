package com.arts.repository;

import com.arts.entity.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, String> {
    Optional<List<OrderDetails>> findByOrderUuid(String orderUuid);
}
