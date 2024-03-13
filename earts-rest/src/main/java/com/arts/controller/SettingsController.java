package com.arts.controller;

import com.arts.config.ApplicationProperties;
import com.arts.entity.Settings;
import com.arts.service.SettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
public class SettingsController {

    private final SettingsService settingsService;

    @Autowired
    public SettingsController(SettingsService settingsService, ApplicationProperties appProps) {
        this.settingsService = settingsService;
    }

    @GetMapping(path = "/settings", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Settings> getSettings(@RequestParam(value = "userUuid", required = false) String userUuid) {
        if(Objects.nonNull(userUuid)) {
            return settingsService.getSettingsByUserUuid(userUuid);
        } else {
           // return settingsService.getSettings();
            return null;
        }
    }

    @GetMapping(path = "/settings/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Settings getSetting(@PathVariable String uuid) {
        return settingsService.getSetting(uuid);
    }

    @PutMapping(path = "/settings/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Settings editSetting(@PathVariable String uuid, @RequestBody Settings art) {
        return settingsService.editSetting(uuid, art);
    }

    @PostMapping(path = "/settings", produces = MediaType.APPLICATION_JSON_VALUE)
    public Settings createSetting(@RequestBody Settings art) {
        return settingsService.createSetting(art);
    }

    @DeleteMapping(path = "/settings/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String deleteSetting(@PathVariable String uuid) {
        return settingsService.deleteSetting(uuid);
    }
}
