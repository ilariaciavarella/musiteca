package com.musiteca.musiteca_api.post.service;

import com.musiteca.musiteca_api.post.model.Post;
import com.musiteca.musiteca_api.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service @RequiredArgsConstructor @Slf4j
public class PostService {
    private final PostRepository postRepository;

    public Iterable<Post> findAllPosts(){
        log.info("Fetching all posts");
        return postRepository.findAll();
    }

    public Optional<Post> findPostById(ObjectId id){
        log.info("Fetching post with id {}", id);
        return postRepository.findById(id);
    }

    public Post savePost(Post post){
        log.info("Saving new post");
        return postRepository.save(post);
    }
}
