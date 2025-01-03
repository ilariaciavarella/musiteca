package com.musiteca.musiteca_api.post.controller;

import com.musiteca.musiteca_api.post.model.Post;
import com.musiteca.musiteca_api.post.service.PostService;
import com.musiteca.musiteca_api.user.model.MusitecaUser;
import com.musiteca.musiteca_api.user.model.UserSummary;
import com.musiteca.musiteca_api.user.repository.UserRepository;
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
import java.util.UUID;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public ResponseEntity<Iterable<Post>> getAllPosts() {
        return new ResponseEntity<>(postService.findAllPosts(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Post>> getSinglePost(@PathVariable ObjectId id) {
        return new ResponseEntity<>(postService.findPostById(id), HttpStatus.OK);
    }

    @GetMapping("/borrowed-instruments")
    public ResponseEntity<Iterable<Post>> getBorrowedPosts() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        MusitecaUser currentUser = (MusitecaUser) authentication.getPrincipal();

        return new ResponseEntity<>(postService.findPostByBorrowingUser(currentUser), HttpStatus.OK);
    }

    @GetMapping("/lending-instruments")
    public ResponseEntity<Iterable<Post>> getLendingPosts() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        MusitecaUser currentUser = (MusitecaUser) authentication.getPrincipal();

        return new ResponseEntity<>(postService.findPostByAuthor(currentUser), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Post> createPost(@RequestBody @Valid Post post) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        MusitecaUser currentUser = (MusitecaUser) authentication.getPrincipal();
        UserSummary author = userRepository.findUserSummaryById(currentUser.getId()).orElseThrow();

        post.setPostId(UUID.randomUUID().toString());
        post.setAuthor(author);
        post.setCreationDate(new Date());
        post.setAvailable(true);

        return new ResponseEntity<>(postService.savePost(post), HttpStatus.CREATED);
    }

    @PutMapping("/{postId}/borrow")
    public ResponseEntity<Post> borrowInstrument(@PathVariable String postId) {
        Post post = postService.findPostByPostId(postId).orElseThrow();

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        MusitecaUser borrowingUser = (MusitecaUser) authentication.getPrincipal();

        return new ResponseEntity<>(postService.assignPostToUser(post, borrowingUser), HttpStatus.OK);
    }

    @PutMapping("/{postId}/return")
    public ResponseEntity<Post> returnInstrument(@PathVariable String postId) {
        Post post = postService.findPostByPostId(postId).orElseThrow();

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        MusitecaUser borrowingUser = (MusitecaUser) authentication.getPrincipal();

        return new ResponseEntity<>(postService.releasePost(post), HttpStatus.OK);
    }
}
