package com.java.starrynight.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.starrynight.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, String> {
    
}
