package com.douglas.authsystem.controller;

import com.douglas.authsystem.dto.RegisterRequestDTO;
import com.douglas.authsystem.model.User;
import com.douglas.authsystem.service.UserService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User register(@Valid @RequestBody RegisterRequestDTO request) {

        return userService.save(request);

    }
}