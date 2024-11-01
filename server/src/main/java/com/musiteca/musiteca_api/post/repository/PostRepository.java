package com.musiteca.musiteca_api.post.repository;

import com.musiteca.musiteca_api.post.model.Post;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends MongoRepository<Post, ObjectId> {
}
