package com.arts.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.arts.entity.Arts;

@Repository
public interface ArtsRepository extends JpaRepository<Arts, String> {

    Optional<List<Arts>> findByArtCategoryUuid(String artCategoryUuid);

    @Query("SELECT a FROM Arts a WHERE a.homeVisibility = 1 ORDER BY a.sortOrder")
    public Optional<List<Arts>> findByHomeVisibility();

    @Query("SELECT a FROM Arts a WHERE a.activeFlag = 1 ORDER BY a.sortOrder")
    public Optional<List<Arts>> findGalleryArts();
}
