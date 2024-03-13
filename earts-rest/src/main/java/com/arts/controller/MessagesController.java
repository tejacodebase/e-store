package com.arts.controller;

import com.arts.config.ApplicationProperties;
import com.arts.entity.Messages;
import com.arts.service.MessagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
public class MessagesController {

    private final MessagesService messagesService;

    @Autowired
    public MessagesController(MessagesService messagesService, ApplicationProperties appProps) {
        this.messagesService = messagesService;
    }

    @GetMapping(path = "/messages", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Messages> getMessages(@RequestParam(value = "userUuid", required = false) String userUuid) {
        if(Objects.nonNull(userUuid)) {
            return messagesService.getMessagesByUserUuid(userUuid);
        } else {
            // return messagesService.getMessages();
            return null;
        }
    }

    @GetMapping(path = "/messages/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Messages getMessage(@PathVariable String uuid) {
        return messagesService.getMessage(uuid);
    }

    @PutMapping(path = "/messages/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Messages editMessage(@PathVariable String uuid, @RequestBody Messages message) {
        return messagesService.editMessage(uuid, message);
    }

    @PostMapping(path = "/messages", produces = MediaType.APPLICATION_JSON_VALUE)
    public Messages createMessage(@RequestBody Messages message) {
        return messagesService.createMessage(message);
    }

    @DeleteMapping(path = "/messages/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String deleteMessage(@PathVariable String uuid) {
        return messagesService.deleteMessage(uuid);
    }
}
