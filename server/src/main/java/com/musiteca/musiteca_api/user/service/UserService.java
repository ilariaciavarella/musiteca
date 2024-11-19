package com.musiteca.musiteca_api.user.service;

import com.musiteca.musiteca_api.user.model.MusitecaUser;
import com.musiteca.musiteca_api.user.model.Role;
import com.musiteca.musiteca_api.user.repository.RoleRepository;
import com.musiteca.musiteca_api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service @RequiredArgsConstructor @Slf4j
public class UserService implements UserServiceInterface {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Override
    public MusitecaUser saveUser(MusitecaUser user) {
        log.info("Saving user: {}", user.getEmail());
        return userRepository.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        log.info("Saving role: {}", role.getRoleName());
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String email, String roleName) {
        log.info("Adding role {} to user {}", roleName, email);
        MusitecaUser user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException(email));
        Role role = roleRepository.findByRoleName(roleName);
        user.getRoles().add(role);
        userRepository.save(user);
    }

    @Override
    public void removeRoleFromUser(String email, String roleName) {
        log.info("Removing role {} from user {}", roleName, email);
        MusitecaUser user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException(email));
        Role role = roleRepository.findByRoleName(roleName);
        user.getRoles().remove(role);
        userRepository.save(user);
    }

    @Override
    public MusitecaUser getUserByEmail(String email) {
        log.info("Fetching user with email {}", email);
        return userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException(email));
    }

    @Override
    public List<MusitecaUser> getAllUsers() {
        log.info("Fetching all users");
        return userRepository.findAll();
    }
}
