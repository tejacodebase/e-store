package com.arts.repository;

import com.arts.entity.Messages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MessagesRepository extends JpaRepository<Messages, String> {

    Optional<List<Messages>> findByUserUuid(String userUuid);
}
