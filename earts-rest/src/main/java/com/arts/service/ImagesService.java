package com.arts.service;

import com.arts.entity.Image;
import com.arts.exception.BadRequestException;
import com.arts.exception.ResourceNotFoundException;
import com.arts.repository.ImagesRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.apache.commons.lang3.StringUtils.isEmpty;


@Service
@Slf4j
public class ImagesService {

    private final ImagesRepository imagesRepository;

    @Autowired
    public ImagesService(ImagesRepository imagesRepository) {
        this.imagesRepository = imagesRepository;
    }

    public List<Image> getImages() {
        return (List<Image>) imagesRepository.findAll();
    }

    public List<Image> getImagesByType(String type) {
        Optional<List<Image>> imagesOptional = imagesRepository.findByType(type);
        return imagesOptional.map(images -> images.stream().toList()).orElse(null);
    }
    public List<Image> getImagesBySourceUuid(String sourceUuid) {
        Optional<List<Image>> imagesOptional = imagesRepository.findBySourceUuid(sourceUuid);
        return imagesOptional.map(images -> images.stream().toList()).orElse(null);
    }

    public Image getImage(String uuid) {
        return imagesRepository.findById(uuid).orElse(null);
    }

    public Image createImage(Image image) {
        image.setUuid(UUID.randomUUID().toString());
        return imagesRepository.save(image);
    }

    public Image editImage(String uuid, Image image) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Image Id cannot be empty");
        }
        if (!imagesRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Image not found with Id");
        }
        image.setUuid(uuid);
        return imagesRepository.save(image);
    }

    public String deleteImage(String uuid) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Image Id cannot be empty");
        }
        if (!imagesRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Image not found with Id");
        }
        imagesRepository.deleteById(uuid);
        return uuid;
    }
}
