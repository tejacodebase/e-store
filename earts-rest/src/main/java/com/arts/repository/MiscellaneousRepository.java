package com.arts.repository;

import com.arts.entity.Miscellaneous;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MiscellaneousRepository extends JpaRepository<Miscellaneous, String> {
}
