package io.nology.superhero_api.superhero_favourite;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class SuperheroFavouriteService {

    private SuperheroFavouriteRepository repo;
    private ModelMapper mapper;

    public SuperheroFavouriteService(SuperheroFavouriteRepository repo, ModelMapper mapper) {
        this.repo = repo;
        this.mapper = mapper;
    }

    public List<SuperheroFavourite> getAllSuperheroFavourites() {
        return repo.findAll();
    }

    public SuperheroFavourite getSuperheroFavouriteById(Long id) {
        Optional<SuperheroFavourite> result = repo.findById(id);
        if (result.isEmpty()) {
            return null;
        }
        return result.get();
    }

    public SuperheroFavourite createSuperheroFavourite(CreateSuperheroFavouriteDTO data) {
        SuperheroFavourite newFavourite = mapper.map(data, SuperheroFavourite.class);
        return this.repo.save(newFavourite);
    }

    public SuperheroFavourite updateSuperheroFavourite(Long id, UpdateSuperheroFavouriteDTO data) {
        Optional<SuperheroFavourite> result = this.repo.findById(id);
        if (result.isEmpty()) {
            return null;
        }
        SuperheroFavourite found = result.get();
        mapper.map(data, found);
        return this.repo.save(found);
    }

    public void deleteSuperheroFavourite(Long id) {
        SuperheroFavourite found = getSuperheroFavouriteById(id);
        found.setDeleted(true);
        this.repo.save(found);
    }

}
