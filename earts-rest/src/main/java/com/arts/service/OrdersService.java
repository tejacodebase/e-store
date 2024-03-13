package com.arts.service;

import com.arts.entity.OrderDetails;
import com.arts.entity.Orders;
import com.arts.exception.BadRequestException;
import com.arts.exception.ResourceNotFoundException;
import com.arts.repository.OrderDetailsRepository;
import com.arts.repository.OrdersRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.apache.commons.lang3.StringUtils.isEmpty;


@Service
@Slf4j
public class OrdersService {

    private final OrdersRepository ordersRepository;
    private final OrderDetailsRepository orderDetailsRepository;

    @Autowired
    public OrdersService(OrdersRepository ordersRepository, OrderDetailsRepository orderDetailsRepository) {
        this.ordersRepository = ordersRepository;
        this.orderDetailsRepository = orderDetailsRepository;
    }

    public List<Orders> getOrders() {
        return (List<Orders>) ordersRepository.findAll();
    }

    public List<OrderDetails> getOrderDetails(String orderUuid) {
        Optional<List<OrderDetails>> orderDetailsOptional = orderDetailsRepository.findByOrderUuid(orderUuid);
        return orderDetailsOptional.map(orderDetails -> orderDetails.stream().toList()).orElse(null);
    }

    public List<Orders> getOrdersByUserUuid(String userUuid) {
        Optional<List<Orders>> ordersOptional = ordersRepository.findByUserUuid(userUuid);
        return ordersOptional.map(orders -> orders.stream().toList()).orElse(null);
    }

    public Orders getOrder(String uuid) {
        return ordersRepository.findById(uuid).orElse(null);
    }

    public Orders createOrder(Orders order) {
        order.setUuid(UUID.randomUUID().toString());
//        if (ordersRepository.existsByUuid(order.getUuid())) {
//            throw new ResourceExistsException("409000", "Order exists with same Id");
//        }
        return ordersRepository.save(order);
    }

    public Orders editOrder(String uuid, Orders order) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Order Id cannot be empty");
        }
        if (!ordersRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Order not found with Id");
        }
        order.setUuid(uuid);
        return ordersRepository.save(order);
    }

    public String deleteOrder(String uuid) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Order Id cannot be empty");
        }
        if (!ordersRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Order not found with Id");
        }
        ordersRepository.deleteById(uuid);
        return uuid;
    }
}
