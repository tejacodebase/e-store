package com.arts.repository;

import com.arts.entity.ArtCategories;
import com.arts.entity.Arts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ArtCategoriesRepository extends JpaRepository<ArtCategories, String> {

}
