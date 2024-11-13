package com.musiteca.musiteca_api.post.controller;

import com.musiteca.musiteca_api.post.model.Post;
import com.musiteca.musiteca_api.post.service.PostService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public ResponseEntity<Iterable<Post>> getAllPosts() {
        return new ResponseEntity<Iterable<Post>>(postService.findAllPosts(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Post>> getSinglePost(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Post>>(postService.findPostById(id), HttpStatus.OK);
    }
}
