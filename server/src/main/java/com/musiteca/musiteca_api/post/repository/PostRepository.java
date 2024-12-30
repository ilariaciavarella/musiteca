package com.musiteca.musiteca_api.post.repository;

import com.musiteca.musiteca_api.post.model.Post;
import com.musiteca.musiteca_api.user.model.MusitecaUser;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PostRepository extends MongoRepository<Post, ObjectId> {
    Optional<Post> findByPostId(String postId);
    Iterable<Post> findByBorrowedBy(MusitecaUser user);
}
