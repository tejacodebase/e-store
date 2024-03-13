package com.arts.controller;

import com.arts.config.ApplicationProperties;
import com.arts.entity.OrderDetails;
import com.arts.entity.Orders;
import com.arts.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
public class OrdersController {

    private final OrdersService ordersService;

    @Autowired
    public OrdersController(OrdersService ordersService, ApplicationProperties appProps) {
        this.ordersService = ordersService;
    }

    @GetMapping(path = "/orders", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Orders> getOrders(@RequestParam(value = "userUuid", required = false) String userUuid) {
        if(Objects.nonNull(userUuid)) {
            return ordersService.getOrdersByUserUuid(userUuid);
        } else {
            return ordersService.getOrders();
        }
    }

    @GetMapping(path = "/orders/{uuid}/order-details", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<OrderDetails> getOrderDetails(@PathVariable(value = "uuid") String orderUuid) {
        return ordersService.getOrderDetails(orderUuid);
    }

    @GetMapping(path = "/orders/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Orders getOrder(@PathVariable String uuid) {
        return ordersService.getOrder(uuid);
    }

    @PutMapping(path = "/orders/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Orders editOrder(@PathVariable String uuid, @RequestBody Orders order) {
        return ordersService.editOrder(uuid, order);
    }

    @PostMapping(path = "/orders", produces = MediaType.APPLICATION_JSON_VALUE)
    public Orders createOrder(@RequestBody Orders order) {
        return ordersService.createOrder(order);
    }

    @DeleteMapping(path = "/orders/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String deleteOrder(@PathVariable String uuid) {
        return ordersService.deleteOrder(uuid);
    }
}
