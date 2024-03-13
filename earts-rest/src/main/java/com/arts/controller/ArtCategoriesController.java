package com.arts.controller;

import com.arts.config.ApplicationProperties;
import com.arts.entity.ArtCategories;
import com.arts.service.ArtCategoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ArtCategoriesController {

    private final ArtCategoriesService artCategoriesService;

    @Autowired
    public ArtCategoriesController(ArtCategoriesService artCategoriesService, ApplicationProperties appProps) {
        this.artCategoriesService = artCategoriesService;
    }

    @GetMapping(path = "/artCategories", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ArtCategories> getArtCategories() {
        return artCategoriesService.getArtCategories();
    }

    @GetMapping(path = "/artCategories/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ArtCategories getArtCategory(@PathVariable String uuid) {
        return artCategoriesService.getArtCategory(uuid);
    }

    @PutMapping(path = "/artCategories/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ArtCategories editArtCategory(@PathVariable String uuid, @RequestBody ArtCategories art) {
        return artCategoriesService.editArtCategory(uuid, art);
    }

    @PostMapping(path = "/artCategories", produces = MediaType.APPLICATION_JSON_VALUE)
    public ArtCategories createArtCategory(@RequestBody ArtCategories art) {
        return artCategoriesService.createArtCategory(art);
    }

    @DeleteMapping(path = "/artCategories/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String deleteArtCategory(@PathVariable String uuid) {
        return artCategoriesService.deleteArtCategory(uuid);
    }
}
