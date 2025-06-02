package io.nology.superhero_api.superheroFavourite;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;
import org.modelmapper.ModelMapper;

import io.nology.superhero_api.superhero_favourite.CreateSuperheroFavouriteDTO;
import io.nology.superhero_api.superhero_favourite.SuperheroFavourite;
import io.nology.superhero_api.superhero_favourite.SuperheroFavouriteRepository;
import io.nology.superhero_api.superhero_favourite.SuperheroFavouriteService;
import io.nology.superhero_api.superhero_favourite.UpdateSuperheroFavouriteDTO;

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

    @Test
    public void getById_callsgetSuperheroFavouriteById() {
        superheroService.getSuperheroFavouriteById(1L);
        verify(superheroRepo).findById(1L);
    }

    @Test
    public void createSuperheroFavourite_repoSavesSuperheroFavourite() {
        // Arrange
        CreateSuperheroFavouriteDTO superheroFavouriteDTO = new CreateSuperheroFavouriteDTO();
        SuperheroFavourite testSuperheroFavourite = new SuperheroFavourite();
        when(modelMapper.map(superheroFavouriteDTO, SuperheroFavourite.class)).thenReturn(testSuperheroFavourite);
        when(superheroRepo.save(any(SuperheroFavourite.class))).thenReturn(testSuperheroFavourite);

        // Act
        SuperheroFavourite result = superheroService.createSuperheroFavourite(superheroFavouriteDTO);

        // Assert
        verify(superheroRepo).save(testSuperheroFavourite);
        assertNotNull(result);
        assertEquals(testSuperheroFavourite, result);
    }

    @Test
    public void updateSuperheroFavourite_repoSavesUpdatedSuperheroFavourite() {
        // Arrange
        // -- create
        Long superheroId = 1L;
        SuperheroFavourite superhero = new SuperheroFavourite();
        superhero.setId(superheroId);
        // -- update
        UpdateSuperheroFavouriteDTO updateDTO = new UpdateSuperheroFavouriteDTO();
        when(superheroRepo.findById(superheroId)).thenReturn(Optional.of(superhero));
        when(superheroRepo.save(any(SuperheroFavourite.class))).thenReturn(superhero);

        // Act
        SuperheroFavourite result = superheroService.updateSuperheroFavourite(superheroId,updateDTO);

        // Assert
        verify(superheroRepo).save(superhero);
        assertNotNull(result);
    }

    @Test
    public void deleteSuperheroFavourite_SuperheroIsMarkedAsDeleted() {
        // Arrange
        Long superheroId = 1L;
        SuperheroFavourite superhero = new SuperheroFavourite();
        superhero.setId(superheroId);
        when(superheroRepo.findById(superheroId)).thenReturn(Optional.of(superhero));
        when(superheroRepo.save(any(SuperheroFavourite.class))).thenReturn(superhero);

        // Act
        superheroService.deleteSuperheroFavourite(superheroId);

        // Assert
        assertEquals(Boolean.TRUE, superhero.getDeleted());
        assertTrue(superhero.getDeleted());
    }

}
