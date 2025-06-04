import styles from "./SuperHeroCard.module.scss";

interface SuperheroCardProps {
    id: number
}

export const SuperHeroCard = ({id}:SuperheroCardProps) => {
    return (
        <div className={styles.card}>
            <p>BopBop</p>
            <p>{id}</p>
        </div>
    )
}