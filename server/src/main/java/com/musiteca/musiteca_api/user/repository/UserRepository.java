package com.musiteca.musiteca_api.user.repository;

import com.musiteca.musiteca_api.user.model.MusitecaUser;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<MusitecaUser, ObjectId> {
    MusitecaUser findByEmail (String email);
}
