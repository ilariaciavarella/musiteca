package com.musiteca.musiteca_api.post.service;

import com.musiteca.musiteca_api.post.model.Post;
import com.musiteca.musiteca_api.post.repository.PostRepository;
import com.musiteca.musiteca_api.user.model.MusitecaUser;
import com.musiteca.musiteca_api.user.model.UserSummary;
import com.musiteca.musiteca_api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service @RequiredArgsConstructor @Slf4j
public class PostService {
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    public Iterable<Post> findAllPosts(){
        log.info("Fetching all posts");
        return postRepository.findAll();
    }

    public Optional<Post> findPostById(ObjectId id){
        log.info("Fetching post with id {}", id);
        return postRepository.findById(id);
    }

    public Optional<Post> findPostByPostId(String postId){
        log.info("Fetching post with post id {}", postId);
        return postRepository.findByPostId(postId);
    }

    public Iterable<Post> findPostByBorrowingUser(MusitecaUser user){
        log.info("Fetching posts borrowed by {}", user.getEmail());
        UserSummary userSummary = userRepository.findUserSummaryById(user.getId()).orElseThrow();

        return postRepository.findByBorrowedBy(userSummary);
    }

    public Iterable<Post> findPostByAuthor(MusitecaUser user){
        log.info("Fetching post by author: {}", user.getEmail());
        UserSummary userSummary = userRepository.findUserSummaryById(user.getId()).orElseThrow();
        return postRepository.findByAuthor(userSummary);
    }

    public Post savePost(Post post){
        log.info("Saving new post");
        return postRepository.save(post);
    }

    public Post assignPostToUser(Post post, MusitecaUser user){
        log.info("Assigning post to user {}", user.getEmail());
        UserSummary userSummary = userRepository.findUserSummaryById(user.getId()).orElseThrow();
        post.setBorrowedBy(userSummary);
        post.setAvailable(false);
        return postRepository.save(post);
    }

    public Post releasePost(Post post){
        log.info("Returning instrument to owner");
        post.setAvailable(true);
        post.setBorrowedBy(null);
        return postRepository.save(post);
    }
}
