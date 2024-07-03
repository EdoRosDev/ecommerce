package com.ecommerce.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ecommerce.model.Item;
import com.ecommerce.utils.Color;
import com.ecommerce.utils.Size;


public interface ItemRepository extends CrudRepository<Item, Long>{

    List<Item> findBySizes(Size[] sizes);

    List<Item> findByColors(Color[] colors);
}
