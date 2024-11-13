package com.musiteca.musiteca_api.user.repository;

import com.musiteca.musiteca_api.user.model.Role;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends MongoRepository<Role, ObjectId> {
    Role findByRoleName (String name);
}
