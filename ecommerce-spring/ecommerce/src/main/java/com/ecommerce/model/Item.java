package com.ecommerce.model;
import com.ecommerce.utils.Color;
import com.ecommerce.utils.Size;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "ITEMS")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "size")
    private Size[] sizes;

    @Column(name = "color")
    private Color[] colors;

    public Long getId(){
        return this.id;
    }

    public Size[] getSizes(){
        return this.sizes;
    }

    public Color[] getColors(){
        return this.colors;
    }

}