package com.musiteca.musiteca_api.post.model;

import com.musiteca.musiteca_api.user.model.MusitecaUser;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.net.URL;
import java.util.Set;

@Document(collection = "posts") @Data @AllArgsConstructor
@NoArgsConstructor
public class Post {
    @Id
    private ObjectId id;
    @DBRef
    private MusitecaUser author;
    @NotBlank
    private String body;
//    private Set<URL> images;
    @NotBlank
    private String instrument;
    private String brand;
    private Boolean available;
    @DBRef
    private MusitecaUser borrowedBy;
}
