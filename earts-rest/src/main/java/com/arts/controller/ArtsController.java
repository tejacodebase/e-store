package com.arts.controller;

import com.arts.config.ApplicationProperties;
import com.arts.entity.Arts;
import com.arts.service.ArtsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
public class ArtsController {

    private final ArtsService artsService;

    @Autowired
    public ArtsController(ArtsService artsService, ApplicationProperties appProps) {
        this.artsService = artsService;
    }

     
    @GetMapping(path = "/arts", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Arts> getArts(@RequestParam(value = "categoryUuid", required = false) String categoryUuid,
            @RequestParam(value = "homepageArts", required = false) Boolean homepageArts,
            @RequestParam(value = "galleryArts", required = false) Boolean galleryArts) {
        if (Objects.nonNull(homepageArts)) {
            return artsService.getHomePageArts();
        } else if (Objects.nonNull(galleryArts)) {
            return artsService.getGalleryArts();
        } else if (Objects.nonNull(categoryUuid)) {
            return artsService.getArtsByCategoryUuid(categoryUuid);
        } else {
            return artsService.getArts();
        }
    }

    // 

    @GetMapping(path = "/arts/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Arts getArt(@PathVariable String uuid) {
        return artsService.getArt(uuid);
    }

    @PutMapping(path = "/arts/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Arts editArt(@PathVariable String uuid, @RequestBody Arts art) {
        return artsService.editArt(uuid, art);
    }

    @PostMapping(path = "/arts", produces = MediaType.APPLICATION_JSON_VALUE)
    public Arts createArt(@RequestBody Arts art) {
        return artsService.createArt(art);
    }

    @DeleteMapping(path = "/arts/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String deleteArt(@PathVariable String uuid) {
        return artsService.deleteArt(uuid);
    }
}
