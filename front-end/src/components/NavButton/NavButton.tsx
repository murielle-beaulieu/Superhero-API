import styles from "./NavButton.module.scss";

interface NavButtonProps {
    handleClick: () => unknown;
    innerText: string
}

export const NavButton = ({innerText, handleClick}: NavButtonProps) => {
    return (
        <button className={styles.nav_btn} onClick={handleClick}><h3>{innerText}</h3></button>
    )
}