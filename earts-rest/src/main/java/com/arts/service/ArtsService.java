package com.arts.service;

import com.arts.entity.Arts;
import com.arts.entity.User;
import com.arts.exception.BadRequestException;
import com.arts.exception.ResourceNotFoundException;
import com.arts.repository.ArtsRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.apache.commons.lang3.StringUtils.isEmpty;


@Service
@Slf4j
public class ArtsService {

    private final ArtsRepository artsRepository;

    @Autowired
    public ArtsService(ArtsRepository artsRepository) {
        this.artsRepository = artsRepository;
    }

    public List<Arts> getArts() {
        return (List<Arts>) artsRepository.findAll();
    }

    public List<Arts> getArtsByCategoryUuid(String artCategoryUuid) {
        Optional<List<Arts>> artsOptional = artsRepository.findByArtCategoryUuid(artCategoryUuid);
        return artsOptional.map(arts -> arts.stream().toList()).orElse(null);
    }

    public List<Arts> getHomePageArts() {
        Optional<List<Arts>> artsOptional = artsRepository.findByHomeVisibility();
        return artsOptional.map(arts -> arts.stream().toList()).orElse(null);
    }

    public List<Arts> getGalleryArts() {
        Optional<List<Arts>> artsOptional = artsRepository.findGalleryArts();
        return artsOptional.map(arts -> arts.stream().toList()).orElse(null);
    }

    public Arts getArt(String uuid) {
        return artsRepository.findById(uuid).orElse(null);
    }

    public Arts createArt(Arts art) {
        art.setUuid(UUID.randomUUID().toString());
        System.out.println(art);
//        if (artsRepository.existsByUuid(art.getUuid())) {
//            throw new ResourceExistsException("409000", "Art exists with same Id");
//        }
        return artsRepository.save(art);
    }

    public Arts editArt(String uuid, Arts art) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Art Id cannot be empty");
        }
        if (!artsRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Art not found with Id");
        }
        art.setUuid(uuid);
        return artsRepository.save(art);
    }

    public String deleteArt(String uuid) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Art Id cannot be empty");
        }
        if (!artsRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Art not found with Id");
        }
        artsRepository.deleteById(uuid);
        return uuid;
    }
}
