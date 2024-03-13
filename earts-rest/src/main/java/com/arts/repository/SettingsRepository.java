package com.arts.repository;

import com.arts.entity.Settings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SettingsRepository extends JpaRepository<Settings, String> {

    Optional<List<Settings>> findByUserUuid(String userUuid);

    Optional<Settings> findByType(String type);
}
