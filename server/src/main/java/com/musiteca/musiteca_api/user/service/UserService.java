package com.musiteca.musiteca_api.user.service;

import com.musiteca.musiteca_api.user.model.MusitecaUser;
import com.musiteca.musiteca_api.user.model.Role;
import com.musiteca.musiteca_api.user.repository.RoleRepository;
import com.musiteca.musiteca_api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service @RequiredArgsConstructor @Transactional @Slf4j
public class UserService implements UserServiceInterface {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public MusitecaUser saveUser(MusitecaUser user) {
        log.info("Saving user to the database: {}", user.getFirstName() + ' ' + user.getLastName());
        return userRepository.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        log.info("Saving role to the database: {}", role.getName());
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String userEmail, String roleName) {
        log.info("Adding role {} to the user {}", roleName, userEmail);
        MusitecaUser user = userRepository.findByEmail(userEmail);
        Role role = roleRepository.findByName(roleName);
        user.getRoles().add(role);
        userRepository.save(user);
    }

    @Override
    public MusitecaUser getUserByEmail(String email) {
        log.info("Fetching user {}", email);
        return userRepository.findByEmail(email);
    }

    @Override
    public List<MusitecaUser> getUsers() {
        log.info("Fetching all users");
        return userRepository.findAll();
    }
}
