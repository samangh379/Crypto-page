import React from "react";
import styles from "../Components/coins.module.css";

const Coins = ({ name, image, symbol, price, marketCap, priceChange }) => {
    return (
        <div className={styles.container}>
            <img src={image} className={styles.image1} />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.price}>${price.toLocaleString()}</span>
            <span className={priceChange > 0 ? styles.greenColor : styles.redColor}>{priceChange}%</span>
            <span className={styles.marketCap}>{marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coins;
