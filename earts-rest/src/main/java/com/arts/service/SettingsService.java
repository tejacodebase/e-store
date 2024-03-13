package com.arts.service;

import com.arts.entity.Settings;
import com.arts.exception.BadRequestException;
import com.arts.exception.ResourceNotFoundException;
import com.arts.repository.SettingsRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import static org.apache.commons.lang3.StringUtils.isEmpty;


@Service
@Slf4j
public class SettingsService {

    private final SettingsRepository settingsRepository;

    @Autowired
    public SettingsService(SettingsRepository settingsRepository) {
        this.settingsRepository = settingsRepository;
    }

    public List<Settings> getSettings() {
        return (List<Settings>) settingsRepository.findAll();
    }

    public List<Settings> getSettingsByUserUuid(String userUuid) {
        Optional<List<Settings>> settingsOptional = settingsRepository.findByUserUuid(userUuid);
        return settingsOptional.map(settings -> settings.stream().toList()).orElse(null);
    }

    public Settings getSetting(String uuid) {
        return settingsRepository.findById(uuid).orElse(null);
    }

    public Settings createSetting(Settings setting) {
        setting.setUuid(UUID.randomUUID().toString());
//        if (settingsRepository.existsByUuid(setting.getUuid())) {
//            throw new ResourceExistsException("409000", "Setting exists with same Id");
//        }
        return settingsRepository.save(setting);
    }

    public Settings editSetting(String uuid, Settings setting) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Setting Id cannot be empty");
        }
        if (!settingsRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Setting not found with Id");
        }
        setting.setUuid(uuid);
        return settingsRepository.save(setting);
    }

    public String deleteSetting(String uuid) {
        if (isEmpty(uuid)) {
            throw new BadRequestException("400000", "Setting Id cannot be empty");
        }
        if (!settingsRepository.existsById(uuid)) {
            throw new ResourceNotFoundException("404000", "Setting not found with Id");
        }
        settingsRepository.deleteById(uuid);
        return uuid;
    }
}
