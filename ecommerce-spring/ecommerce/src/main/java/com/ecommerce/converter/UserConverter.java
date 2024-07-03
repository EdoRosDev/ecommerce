package com.ecommerce.converter;

import com.ecommerce.converter.abstractConverter.AbstractConverter;
import com.ecommerce.dto.UserDTO;
import com.ecommerce.model.User;

public class UserConverter extends AbstractConverter<User, UserDTO> {

    @Override
    public User toEntity(UserDTO dto) {
        User user = null;
        if(dto != null){
            user = new User(dto.getId(), dto.getUsername(), dto.getPassword());
        }
        return user;
    }

    @Override
    public UserDTO toDTO(User user) {
        UserDTO dto = null;
        if(user != null){
            dto = new UserDTO(user.getId(), user.getUsername(), user.getPassword());
        }
        return dto;
    }

}
