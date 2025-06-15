package io.nology.superhero_api.superhero_favourite;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "sh_favourites")
public class SuperheroFavourite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // @Column
    // private Long superhero_id;

    @Column
    private String name;

    @Column
    private String slug;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "json")
    private SuperheroImages images;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "json")
    private Powerstats powerstats;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "json")
    private SuperheroAppearance appearance;

    @Column
    private Boolean deleted;
    // will add other information about the superhero later on
}

//   biography: SuperheroBiography;
//   word: SuperheroWork;
//   connections: SuperheroConnections;
// }