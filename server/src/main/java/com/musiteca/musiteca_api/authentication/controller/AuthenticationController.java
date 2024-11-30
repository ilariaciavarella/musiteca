package com.musiteca.musiteca_api.authentication.controller;

import com.musiteca.musiteca_api.authentication.dtos.LoginUserDto;
import com.musiteca.musiteca_api.authentication.dtos.RegisterUserDto;
import com.musiteca.musiteca_api.authentication.utils.LoginResponse;
import com.musiteca.musiteca_api.authentication.service.AuthenticationService;
import com.musiteca.musiteca_api.authentication.service.JwtService;
import com.musiteca.musiteca_api.user.model.MusitecaUser;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<MusitecaUser> signup(@RequestBody @Valid RegisterUserDto registerUserDto) {
        MusitecaUser registeredUser = authenticationService.signUp(registerUserDto);
        return new ResponseEntity<MusitecaUser>(registeredUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginUserDto loginUserDto) {
        MusitecaUser authenticatedUser = authenticationService.login(loginUserDto);
        String jwtToken = jwtService.generateToken(authenticatedUser);
        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setToken(jwtToken);
        loginResponse.setExpiresIn(jwtService.getExpirationTime());

        return new ResponseEntity<LoginResponse>(loginResponse, HttpStatus.ACCEPTED);
    }

}
