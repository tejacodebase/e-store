package com.arts.service;

import com.arts.entity.Messages;
import com.arts.exception.BadRequestException;
import com.arts.exception.ResourceNotFoundException;
import com.arts.repository.MessagesRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.apache.commons.lang3.StringUtils.isEmpty;


@Service
@Slf4j
public class MessagesService {

    private final MessagesRepository messagesRepository;

    @Autowired
    public MessagesService(MessagesRepository messagesRepository) {
        this.messagesRepository = messagesRepository;
    }

    public List<Messages> getMessages() {
        return (List<Messages>) messagesRepository.findAll();
    }

    public List<Messages> getMessagesByUserUuid(String userUuid) {
        Optional<List<Messages>> messagesOptional = messagesRepository.findByUserUuid(userUuid);
        return messagesOptional.map(messages -> messages.stream().toList()).orElse(null);
    }

    public Messages getMessage(String uuid) {
        return messagesRepository.findById(uuid).orElse(null);
    }

    public Messages createMessage(Messages message) {
        message.setUuid(UUID.randomUUID().toString());
//        if (messagesRepository.existsByUuid(message.getUuid())) {
//            throw new ResourceExistsException("409000", "Message exists with same Id");
//        }
        return messagesRepository.save(message);
    }

    public Messages editMessage(String uuid, Messages message) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Message Id cannot be empty");
        }
        if (!messagesRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Message not found with Id");
        }
        message.setUuid(uuid);
        return messagesRepository.save(message);
    }

    public String deleteMessage(String uuid) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Message Id cannot be empty");
        }
        if (!messagesRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Message not found with Id");
        }
        messagesRepository.deleteById(uuid);
        return uuid;
    }
}
