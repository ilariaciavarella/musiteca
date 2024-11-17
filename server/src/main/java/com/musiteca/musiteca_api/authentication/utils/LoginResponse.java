package com.musiteca.musiteca_api.authentication.utils;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor
public class LoginResponse {
    private String token;
    private long expiresIn;
}
