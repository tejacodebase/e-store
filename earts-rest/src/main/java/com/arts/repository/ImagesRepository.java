package com.arts.repository;

import com.arts.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ImagesRepository extends JpaRepository<Image, String> {

    Optional<List<Image>> findByType(String type);

    Optional<List<Image>> findBySourceUuid(String sourceUuid);

}
