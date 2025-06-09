import type { SuperheroFavourite } from "../../services/favourites-services"
import { SuperHeroFavouriteCard } from "../SuperheroFavouriteCard/SuperheroFavouriteCard"
import styles from "./CardContainer.module.scss"

interface CardContainerProps {
    data: SuperheroFavourite[];
}

export const CardContainer = ({data}: CardContainerProps) => {
    console.log(data);
    return (
        <section className={styles.card_container}>
        {data && data.map((hero) => <SuperHeroFavouriteCard data={hero}/>)}
        </section>
    )
}