package com.ecommerce.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.model.Item;
import com.ecommerce.utils.Color;
import com.ecommerce.utils.Size;

import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface ItemRepository extends CrudRepository<Item, Long>{

    List<Item> findBySizes(Size[] sizes);

    List<Item> findByColors(Color[] colors);
}
