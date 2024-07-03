package com.ecommerce.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ecommerce.dao.ItemRepository;
import com.ecommerce.dto.ItemDTO;
import com.ecommerce.model.Item;
import com.ecommerce.service.abstractService.AbstractService;
import com.ecommerce.utils.Color;
import com.ecommerce.utils.Size;

@Service
public class ItemService extends AbstractService<Item, ItemDTO> {

    // crud methods inherited from AbstractService

    public List<ItemDTO> findBySizes(Size[] sizes) {
        return converter.toDTOList(((ItemRepository) repository).findBySizes(sizes));
    }
    
    public List<ItemDTO> findByColors(Color[] colors) {
        return converter.toDTOList(((ItemRepository) repository).findByColors(colors));
    }

}