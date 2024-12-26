package com.musiteca.musiteca_api.post.controller;

import com.musiteca.musiteca_api.post.model.Post;
import com.musiteca.musiteca_api.post.service.PostService;
import com.musiteca.musiteca_api.user.model.MusitecaUser;
import jakarta.validation.Valid;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public ResponseEntity<Iterable<Post>> getAllPosts() {
        return new ResponseEntity<>(postService.findAllPosts(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Post>> getSinglePost(@PathVariable ObjectId id) {
        return new ResponseEntity<>(postService.findPostById(id), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Post> createPost(@RequestBody @Valid Post post) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        MusitecaUser currentAuthor = (MusitecaUser) authentication.getPrincipal();

        post.setAuthor(currentAuthor);
        post.setCreationDate(new Date());
        post.setAvailable(true);

        return new ResponseEntity<>(postService.savePost(post), HttpStatus.CREATED);
    }

    @PutMapping("/{id}/borrow")
    public ResponseEntity<Post> borrowInstrument(@PathVariable ObjectId id) {
        Post post = postService.findPostById(id).orElseThrow();

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        MusitecaUser borrowingUser = (MusitecaUser) authentication.getPrincipal();

        return new ResponseEntity<>(postService.assignPostToUser(post, borrowingUser), HttpStatus.OK);
    }

    @PutMapping("/{id}/return")
    public ResponseEntity<Post> returnInstrument(@PathVariable ObjectId id) {
        Post post = postService.findPostById(id).orElseThrow();

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        MusitecaUser borrowingUser = (MusitecaUser) authentication.getPrincipal();

        return new ResponseEntity<>(postService.releasePost(post), HttpStatus.OK);
    }
}
