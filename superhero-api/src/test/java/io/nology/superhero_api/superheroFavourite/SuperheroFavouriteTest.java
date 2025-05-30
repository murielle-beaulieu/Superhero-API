package io.nology.superhero_api.superheroFavourite;

import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;
import org.modelmapper.ModelMapper;

import io.nology.superhero_api.superhero_favourite.SuperheroFavouriteRepository;
import io.nology.superhero_api.superhero_favourite.SuperheroFavouriteService;

public class SuperheroFavouriteTest {

    @Mock
    private SuperheroFavouriteRepository superheroRepo;

    @Mock
    private ModelMapper modelMapper;

    @Spy
    @InjectMocks
    private SuperheroFavouriteService superheroService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void getAll_callsFindAllSuperheroFavourites() {
        superheroService.getAllSuperheroFavourites();
        verify(superheroRepo).findAll();
    }
    
}
