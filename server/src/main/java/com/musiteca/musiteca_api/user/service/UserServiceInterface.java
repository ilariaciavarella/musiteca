package com.musiteca.musiteca_api.user.service;

import com.musiteca.musiteca_api.user.model.MusitecaUser;
import com.musiteca.musiteca_api.user.model.Role;

import java.util.List;

public interface UserServiceInterface {
    MusitecaUser saveUser(MusitecaUser user);
    Role saveRole(Role role);
    void addRoleToUser(String userEmail, String roleName);
    MusitecaUser getUserByEmail(String email);
    List<MusitecaUser> getUsers();
}
