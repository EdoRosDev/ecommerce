package com.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.controller.abstractController.AbstractController;
import com.ecommerce.dto.ItemDTO;
import com.ecommerce.service.ItemService;
import com.ecommerce.utils.Color;
import com.ecommerce.utils.Size;

@RestController
@RequestMapping("/item")
@CrossOrigin(origins = "http://localhost:4200")
public class ItemController extends AbstractController<ItemDTO>{

	@Autowired
	private ItemService service;

    @GetMapping(value = "/sizes")
    public List<ItemDTO> findbySizes(@RequestParam Size[] sizes) {
        List<ItemDTO> itemDTOs = ((ItemService) service).findBySizes(sizes);
        return itemDTOs;
    }

    
    @GetMapping(value = "/colors")
    public List<ItemDTO> findbyColors(@RequestParam Color[] colors) {
        List<ItemDTO> itemDTOs = ((ItemService) service).findByColors(colors);
        return itemDTOs;
    }

}
