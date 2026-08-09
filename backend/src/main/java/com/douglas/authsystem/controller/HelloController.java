package com.douglas.authsystem.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Olá Douglas! Minha API Spring Boot está funcionando!";
    }

    @GetMapping("/me")
    public String me() {
        return "Usuário autenticado!";
    }
}