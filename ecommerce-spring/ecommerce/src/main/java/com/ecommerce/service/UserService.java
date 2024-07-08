package com.ecommerce.service;

import org.springframework.stereotype.Service;

import com.ecommerce.dao.UserRepository;
import com.ecommerce.dto.UserDTO;
import com.ecommerce.model.User;
import com.ecommerce.service.abstractService.AbstractService;

@Service
public class UserService extends AbstractService<User, UserDTO>{

    //crud methods inherited from AbstractService

    //Necessary LOGIN method
	public UserDTO findByUsernameAndPassword(String username, String password) {
		return converter.toDTO(((UserRepository)repository).findByUsernameAndPassword(username, password));
	}

}
