package com.musiteca.musiteca_api.post.service;

import com.musiteca.musiteca_api.post.model.Post;
import com.musiteca.musiteca_api.post.repository.PostRepository;
import com.musiteca.musiteca_api.user.repository.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Post> getAllPosts(){
        return postRepository.findAll();
    }

    public Optional<Post> getPostById(ObjectId id){
        return postRepository.findById(id);
    }

    public Post createPost(String author, String body, String location, String instrument, String brand){
        return postRepository.insert(new Post(
                null,
                userRepository.findByEmail(author),
                body,
                location,
                instrument,
                brand,
                true));
    }
}
