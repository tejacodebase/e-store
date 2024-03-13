package com.arts.service;

import com.arts.entity.ArtCategories;
import com.arts.exception.BadRequestException;
import com.arts.exception.ResourceNotFoundException;
import com.arts.repository.ArtCategoriesRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.apache.commons.lang3.StringUtils.isEmpty;


@Service
@Slf4j
public class ArtCategoriesService {

    private final ArtCategoriesRepository artCategoriesRepository;

    @Autowired
    public ArtCategoriesService(ArtCategoriesRepository artCategoriesRepository) {
        this.artCategoriesRepository = artCategoriesRepository;
    }

    public List<ArtCategories> getArtCategories() {
        return (List<ArtCategories>) artCategoriesRepository.findAll();
    }

    public ArtCategories getArtCategory(String uuid) {
        return artCategoriesRepository.findById(uuid).orElse(null);
    }

    public ArtCategories createArtCategory(ArtCategories art) {
        art.setUuid(UUID.randomUUID().toString());
        return artCategoriesRepository.save(art);
    }

    public ArtCategories editArtCategory(String uuid, ArtCategories artCategory) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Art  Id cannot be empty");
        }
        if (!artCategoriesRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Art Category not found with uuid");
        }
        artCategory.setUuid(uuid);
        return artCategoriesRepository.save(artCategory);
    }

    public String deleteArtCategory(String uuid) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Art Id cannot be empty");
        }
        if (!artCategoriesRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Art Category not found with uuid");
        }
        artCategoriesRepository.deleteById(uuid);
        return uuid;
    }
}
