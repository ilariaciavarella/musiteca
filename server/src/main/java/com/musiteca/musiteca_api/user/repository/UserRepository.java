package com.musiteca.musiteca_api.user.repository;

import com.musiteca.musiteca_api.user.model.MusitecaUser;
import com.musiteca.musiteca_api.user.model.UserSummary;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<MusitecaUser, ObjectId> {
    Optional<MusitecaUser> findByEmail (String email);
    @Query(value = "{ '_id': ?0 }", fields = "{ 'firstName': 1, 'lastName': 1, 'email': 1, 'location': 1 }")
    Optional<UserSummary>findUserSummaryById (ObjectId id);
}
