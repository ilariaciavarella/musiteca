package com.musiteca.musiteca_api.user.controller;

import com.musiteca.musiteca_api.user.model.MusitecaUser;
import com.musiteca.musiteca_api.user.model.Role;
import com.musiteca.musiteca_api.user.service.UserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/signup")
    public String signup() {
        return "signup";
    }

    @GetMapping("/users")
    public ResponseEntity<List<MusitecaUser>> getUsers() {
        return new ResponseEntity<List<MusitecaUser>>(userService.getUsers(), HttpStatus.OK);
    }

    @PostMapping("/user/save")
    public ResponseEntity<MusitecaUser> saveUser(@RequestBody MusitecaUser user) {
        return new ResponseEntity<MusitecaUser>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @PostMapping("/role/save")
    public ResponseEntity<Role> saveRole(@RequestBody Role role) {
        return new ResponseEntity<Role>(userService.saveRole(role), HttpStatus.CREATED);
    }

    @PostMapping("/role/addToUser")
    public ResponseEntity<?> addRoleToUser(@RequestBody RoleToUserForm form) {
        userService.addRoleToUser(form.getEmail(), form.getRole());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

@Data
class RoleToUserForm {
    private String email;
    private String role;
}
