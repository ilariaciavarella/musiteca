package com.musiteca.musiteca_api.user.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor @NoArgsConstructor @Data
public class UserSummary {
    private String firstName;
    private String lastName;
    private String email;
    private String location;
}
