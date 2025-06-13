import styles from "./SuperHeroCard.module.scss";

export interface dbHero {
    name: string;
    id: number;
}

interface SuperheroCardProps {
    data: dbHero;
}


export const SuperHeroCard = ({data}:SuperheroCardProps) => {
    return (
        <div className={styles.card} key={data.id}>
            <p>BopBop</p>
            <p>{data.name}</p>
        </div>
    )
}