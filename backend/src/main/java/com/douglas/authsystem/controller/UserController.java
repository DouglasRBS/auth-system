package com.douglas.authsystem.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/user/me")
    public String getCurrentUser(Authentication authentication) {

        return "Usuário autenticado: " + authentication.getName();
    }
}