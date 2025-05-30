package io.nology.superhero_api.superhero_favourite;

import lombok.Data;

@Data
public class CreateSuperheroFavouriteDTO {

    private Long superhero_id;

    private String superhero_name;

    private String superhero_img;

    private Powerstats powerstats;

    private Boolean deleted = false;
}
