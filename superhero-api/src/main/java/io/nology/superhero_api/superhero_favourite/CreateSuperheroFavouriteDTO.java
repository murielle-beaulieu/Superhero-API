package io.nology.superhero_api.superhero_favourite;

import lombok.Data;

@Data
public class CreateSuperheroFavouriteDTO {

    // private int superhero_id;

    private String name;

    private String slug;

    private SuperheroImages images;

    private Powerstats powerstats;

    private SuperheroAppearance appearance;

    private  Boolean deleted = false;
    // will add other information about the superhero later on
}

