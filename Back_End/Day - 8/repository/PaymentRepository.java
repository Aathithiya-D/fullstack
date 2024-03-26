package com.java.starrynight.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.starrynight.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, String> {
    
}
