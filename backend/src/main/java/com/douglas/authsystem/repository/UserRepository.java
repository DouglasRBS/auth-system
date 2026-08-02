package com.douglas.authsystem.repository;

import com.douglas.authsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}