package com.arts.controller;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.arts.config.ApplicationProperties;
import com.arts.entity.Image;
import com.arts.service.ImagesService;

@RestController
public class ImagesController {

    private final ImagesService imagesService;

    @Autowired
    public ImagesController(ImagesService imagesService, ApplicationProperties appProps) {
        this.imagesService = imagesService;
    }


    @GetMapping(path = "/images", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Image> getImages(@RequestParam(value = "type", required = false) String type, @RequestParam(value = "sourceUuid", required = false) String sourceUuid) {
        if(Objects.nonNull(type)) {
            return imagesService.getImagesByType(type);
        } else if(Objects.nonNull(sourceUuid)) {
            return imagesService.getImagesBySourceUuid(sourceUuid);
        } else {
            return imagesService.getImages();
        }
    }

    @GetMapping(path = "/images/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Image getImage(@PathVariable String uuid) {
        return imagesService.getImage(uuid);
    }

    @PutMapping(path = "/images/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Image editImage(@PathVariable String uuid, @RequestBody Image art) {
        return imagesService.editImage(uuid, art);
    }

    @PostMapping(path = "/images", produces = MediaType.APPLICATION_JSON_VALUE)
    public Image createImage(@RequestBody Image art) {
        return imagesService.createImage(art);
    }

    @DeleteMapping(path = "/images/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String deleteImage(@PathVariable String uuid) {
        return imagesService.deleteImage(uuid);
    }
}
