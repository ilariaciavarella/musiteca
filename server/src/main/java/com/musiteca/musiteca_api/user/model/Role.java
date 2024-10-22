package com.musiteca.musiteca_api.user.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "roles") @Data
@NoArgsConstructor
@AllArgsConstructor
public class Role {
    @Id
    private ObjectId id;
    private String name;
}
