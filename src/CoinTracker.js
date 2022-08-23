import {useState, useeffect, useEffect} from "react";
import styles from './CoinTracker.css';

export default function CoinTracker(){
    const topCoins = ['BTC', 'ETH', 'BNB', 'KLAY'];
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [currentUnit, setCurrentUnit] = useState(topCoins[0]);
    const [value, setValue] = useState('');

    const onSelect = (e) => {
        setCurrentUnit(e.target.value);
        setValue('');
    }

    const onChange = (e) => {
        console.log(e.target.value);
    }
    
    const hideDecimal = (number, len) =>{
        return Math.floor(number * 10 ** len) / 10 ** len;
    }

    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
        .then(res => res.json())
        .then(json => {
            setCoins(json);
            setLoading(false);
        });
    }, []);
    return (
        <div>
            <h1>My Coins! ({coins.length})</h1>
            {loading 
                ? (<strong>Loading...</strong>)
                : (
                    <div>
                        <div className={styles.currentPrice}>
                            <h2>Current Price</h2>
                            <p></p>
                            {topCoins.map((item, idx) => (
                                (<p key={idx}>
                                    <strong>1 {item} = </strong>
                                    <span>
                                        {
                                            hideDecimal(
                                                coins.filter(coin => coin.symbol === item)[0].quotes.USD.price, 3
                                            )
                                        }
                                    </span> 
                                    <i>USD</i>
                                </p>)
                            ))}
                        </div>
                        <div className='convertPrice'>
                            <h3>Conver Price</h3>
                            <select onChange={ onSelect }>
                                {   
                                    topCoins.map((item, idx) => 
                                    (
                                        <option key={ idx } defaultValue={idx === 0}>
                                            {item}
                                        </option>
                                    ))
                                }
                            </select>
                            <div>
                                <input 
                                    type="text"
                                    disable
                                    onChange={ onChange }
                                    value={
                                        value
                                        ? hideDecimal(
                                            coins.filter(coin => coin.symbol === currentUnit)[0].quotes.USD.price, 6
                                        )
                                        : ''
                                    } 
                                />
                                <span className='unit'>{currentUnit}</span>
                                <button onClick={()=>setValue('')}>Clear</button>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )

}
