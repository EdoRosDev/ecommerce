package com.ecommerce.converter;

import org.springframework.stereotype.Component;

import com.ecommerce.converter.abstractConverter.AbstractConverter;
import com.ecommerce.dto.ItemDTO;
import com.ecommerce.model.Item;

@Component
public class ItemConverter extends AbstractConverter<Item, ItemDTO> {

    @Override
    public Item toEntity(ItemDTO dto) {
        Item user = null;
        if(dto != null){
            user = new Item(dto.getId(), dto.getImg(), dto.getTitle(), dto.getBrand(), dto.getPrice(), dto.getSizes(), dto.getColors());
        }
        return user;
    }

    @Override
    public ItemDTO toDTO(Item item) {
        ItemDTO dto = null;
        if(item != null){
            dto = new ItemDTO(item.getId(), item.getImg(), item.getTitle(), item.getBrand(), item.getPrice(), item.getSizes(), item.getColors());
        }
        return dto;
    }

}