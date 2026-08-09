package com.douglas.authsystem.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.time.Instant;
import java.time.temporal.ChronoUnit;

@Service
public class JwtService {

    private final SecretKey secretKey;

    public JwtService() {
        this.secretKey = Keys.hmacShaKeyFor(
                "minha-chave-secreta-do-auth-system-1234567890".getBytes()
        );
    }

    public String generateToken(String email) {

        return Jwts.builder()
                .subject(email)
                .issuedAt(java.util.Date.from(Instant.now()))
                .expiration(
                        java.util.Date.from(
                                Instant.now().plus(1, ChronoUnit.HOURS)
                        )
                )
                .signWith(secretKey)
                .compact();
    }

    public String extractEmail(String token) {

    return Jwts.parser()
            .verifyWith(secretKey)
            .build()
            .parseSignedClaims(token)
            .getPayload()
            .getSubject();
}
}