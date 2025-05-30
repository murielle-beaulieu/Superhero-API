package io.nology.superhero_api.superhero_favourite;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/sh_favourites")
public class SuperheroFavouriteController {

    private SuperheroFavouriteService superheroService;

    public SuperheroFavouriteController(SuperheroFavouriteService superheroService) {
        this.superheroService = superheroService;
    }

    @GetMapping
    public ResponseEntity<List<SuperheroFavourite>> getAllSuperheroFavourites() {
       List<SuperheroFavourite> all = superheroService.getAllSuperheroFavourites();
       return new ResponseEntity<>(all, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SuperheroFavourite> getSuperheroFavouriteById(@PathVariable Long id) {
        SuperheroFavourite result = superheroService.getSuperheroFavouriteById(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<SuperheroFavourite> createSuperheroFavourite(@RequestBody @Valid CreateSuperheroFavouriteDTO data) {
        SuperheroFavourite newFavourite = superheroService.createSuperheroFavourite(data);
        return new ResponseEntity<>(newFavourite, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SuperheroFavourite> updateSuperheroFavourite(@PathVariable Long id, @RequestBody @Valid UpdateSuperheroFavouriteDTO data) {
        SuperheroFavourite updatedFavourite = superheroService.updateFavourite(id, data);
        return new ResponseEntity<>(updatedFavourite, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteSuperheroFavourite(@PathVariable Long id){
        superheroService.deleteFavourite(id);
    }
}
