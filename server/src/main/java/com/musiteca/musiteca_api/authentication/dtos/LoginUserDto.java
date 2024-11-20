package com.musiteca.musiteca_api.authentication.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class LoginUserDto {

    @Email(message = "Please, enter a valid email address")
    private String email;

    @Size(min = 8, message = "Your password must be at least 8 characters long")
    private String password;

}
