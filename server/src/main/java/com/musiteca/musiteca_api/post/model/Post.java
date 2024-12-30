package com.musiteca.musiteca_api.post.model;

import com.musiteca.musiteca_api.user.model.MusitecaUser;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.net.URL;
import java.util.Date;

@Document(collection = "posts") @Data @AllArgsConstructor
@NoArgsConstructor
public class Post {
    @Id
    private ObjectId id;
    private String postId;
    @DBRef
    private MusitecaUser author;
    @NotBlank
    private String instrument;
    @NotBlank
    private String brand;
    @NotNull
    private Integer age;
    @NotNull
    private URL image;
    @NotBlank
    private String body;
    private Date creationDate;
    private Boolean available;
    @DBRef
    private MusitecaUser borrowedBy;
}
