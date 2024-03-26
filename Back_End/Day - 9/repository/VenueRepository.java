package com.java.starrynight.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.starrynight.model.Venue;

public interface VenueRepository extends JpaRepository<Venue, String> {

    
} 