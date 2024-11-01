package com.musiteca.musiteca_api.post.controller;

import com.musiteca.musiteca_api.post.model.Post;
import com.musiteca.musiteca_api.post.service.PostService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public ResponseEntity<List<Post>> getPosts() {
        return new ResponseEntity<List<Post>>(postService.getAllPosts(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Post>> getSinglePost(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Post>>(postService.getPostById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Post> createPost(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<Post>(postService.createPost(
                payload.get("author"),
                payload.get("body"),
                payload.get("location"),
                payload.get("instrument"),
                payload.get("brand")
                ), HttpStatus.CREATED);
    }
}
