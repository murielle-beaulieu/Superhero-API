import type { SuperheroFavourite } from "../../services/favourites-services"
import { SuperHeroFavouriteCard } from "../SuperheroFavouriteCard/SuperheroFavouriteCard";
import styles from "./CardContainer.module.scss"

interface CardContainerProps {
    favouritesList: SuperheroFavourite[];
}

export const CardContainer = ({favouritesList}: CardContainerProps) => {
    if (favouritesList) return (
        <section className={styles.card_container}>
        { favouritesList.map((hero: SuperheroFavourite) => <SuperHeroFavouriteCard favourite={hero} key={hero.id}/>)}
        </section>
    )
}