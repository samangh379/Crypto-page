import React, { useEffect, useState } from "react";
import styles from "./Landing.module.css";
//API
import { getCoin } from "../Services/api";
//Components
import Coins from "./Coins";
//gif
import Loader from "./Loader";

const Landing = () => {
    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin();
            // console.log(data);
            setCoins(data);
        };
        fetchApi();
    }, []);

    const [coins, setCoins] = useState([]);
    const [search, setSeacrh] = useState("");
    const searchHandler = (event) => {
        setSeacrh(event.target.value);
    };

    const searchCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <input className={styles.searchBox} type="text" placeholder="Search" value={search} onChange={searchHandler} />
            <div className={styles.container}>
                {coins.length ? (
                    <div className={styles.coins}>
                        {searchCoins.map((coin) => (
                            <Coins
                                className={styles.coins}
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                marketCap={coin.market_cap}
                                priceChange={coin.price_change_percentage_24h}
                            />
                        ))}
                    </div>
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
};

export default Landing;
