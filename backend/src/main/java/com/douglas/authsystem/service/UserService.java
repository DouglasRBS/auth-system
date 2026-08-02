package com.douglas.authsystem.service;

import com.douglas.authsystem.dto.RegisterRequestDTO;
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

    User user = new User();

    user.setName(request.getName());

    user.setEmail(request.getEmail());

    user.setPassword(passwordEncoder.encode(request.getPassword()));

    return userRepository.save(user);

}

}