package com.java.starrynight.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.starrynight.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, String> {
    
}
