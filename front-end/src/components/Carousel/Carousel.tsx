import { useState } from "react";
import { SuperHeroCard } from "../SuperheroCard/SuperheroCard";
import styles from "./Carousel.module.scss";


const info = [<SuperHeroCard key={1} id={0}/>,
            <SuperHeroCard key={1} id={1}/>,
            <SuperHeroCard key={2} id={2}/>,
            <SuperHeroCard key={3} id={3}/>,
            <SuperHeroCard key={4} id={4}/>];

// const info = [1,2,5,6,8];



export const Carousel = () => {
    
    const [display, setDisplay] = useState([1,2,3]);

    const filteredCards = info.filter((card) => display.includes(card.props.id));
    
    const goBack = () => {
        console.log('back')
    }

    const goForward = () => {
        console.log('forward')
    }

    return (
        <section className={styles.carousel}>
            <button onClick={() => goBack()}>
                {'<'}
            </button>
            {filteredCards}
            <button onClick={() => goForward()}>{'>'}</button>
        </section>
    )
}