package com.ecommerce.dto;

import com.ecommerce.utils.Color;
import com.ecommerce.utils.Size;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="id")
public class ItemDTO {

    private Long id;

    private Size[] sizes;

    private Color[] colors;

}
