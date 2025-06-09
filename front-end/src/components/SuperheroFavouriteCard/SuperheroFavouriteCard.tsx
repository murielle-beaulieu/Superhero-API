import type { SuperheroFavourite } from "../../services/favourites-services";
import styles from "./SuperHeroFavouriteCard.module.scss"

interface SuperHeroFavouriteCardProps {
    data: SuperheroFavourite;
}

export const SuperHeroFavouriteCard = ({data}: SuperHeroFavouriteCardProps) => {
    console.log(data)
    return (
        <div className={styles.fav_card}>
            <div className={styles.hero_profile}>Img</div>
            <div className={styles.hero_stats}>stats</div>
        </div>
    )
}