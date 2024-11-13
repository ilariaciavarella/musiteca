package com.musiteca.musiteca_api.post.service;

import com.musiteca.musiteca_api.post.model.Post;
import com.musiteca.musiteca_api.post.repository.PostRepository;
import com.musiteca.musiteca_api.user.model.MusitecaUser;
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

    public Iterable<Post> findAllPosts(){
        return postRepository.findAll();
    }

    public Optional<Post> findPostById(ObjectId id){
        return postRepository.findById(id);
    }

    public Post savePost(String authorEmail, String body, String location, String instrument, String brand){
        MusitecaUser authorUser = userRepository.findByEmail(authorEmail).orElseThrow();

        return postRepository.insert(
                new Post(
                        null,
                        authorUser,
                        body,
                        location,
                        instrument,
                        brand,
                        true
                        )
        );
    }
}
