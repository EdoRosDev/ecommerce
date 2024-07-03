package com.ecommerce.dao;

import org.springframework.data.repository.CrudRepository;

import com.ecommerce.model.User;

public interface UserRepository extends CrudRepository<User, Long>{

    User findByUsernameAndPassword(String username, String password);

}
