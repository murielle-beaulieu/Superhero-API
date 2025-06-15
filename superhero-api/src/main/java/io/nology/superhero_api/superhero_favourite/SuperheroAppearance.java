package io.nology.superhero_api.superhero_favourite;

import lombok.Data;

@Data
public class SuperheroAppearance {

    private String gender;

    private String race;

    private String[] height;

    private String[] weight;

    private String eyeColor;

    private String hairColor;

}