package com.douglas.authsystem.service;

import com.douglas.authsystem.dto.LoginRequestDTO;
import com.douglas.authsystem.dto.RegisterRequestDTO;
import com.douglas.authsystem.exception.EmailAlreadyExistsException;
import com.douglas.authsystem.model.User;
import com.douglas.authsystem.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository,
            BCryptPasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User save(RegisterRequestDTO request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new EmailAlreadyExistsException("E-mail já cadastrado.");
        }

        User user = new User();

        user.setName(request.getName());

        user.setEmail(request.getEmail());

        user.setPassword(passwordEncoder.encode(request.getPassword()));

        return userRepository.save(user);

    }

    public String login(LoginRequestDTO request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Senha inválida.");
        }

        return "Login realizado com sucesso!";
    }

}