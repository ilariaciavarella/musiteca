package com.musiteca.musiteca_api.authentication.service;

import com.musiteca.musiteca_api.authentication.dtos.LoginUserDto;
import com.musiteca.musiteca_api.authentication.dtos.RegisterUserDto;
import com.musiteca.musiteca_api.user.model.MusitecaUser;
import com.musiteca.musiteca_api.user.repository.RoleRepository;
import com.musiteca.musiteca_api.user.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final RoleRepository roleRepository;

    public AuthenticationService(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.roleRepository = roleRepository;
    }

    public MusitecaUser signUp (RegisterUserDto input) {
        MusitecaUser user = new MusitecaUser(
                input.getFirstName(),
                input.getLastName(),
                input.getEmail(),
                passwordEncoder.encode(input.getPassword()),
                roleRepository.findByRoleName("ROLE_USER")
        );

        return userRepository.save(user);
    }

    public MusitecaUser login(LoginUserDto input) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        input.getEmail(),
                        input.getPassword()
                )
        );

        return userRepository.findByEmail(input.getEmail()).orElseThrow();
    }
}
