import React from "react";
import "./Stock.css"
import {Link} from "react-router-dom";
import { TrendingDown, TrendingUp } from "./Icon"
import { CoinDetail } from "./CoinDetail";
const StockPage=(
    props

    )=>{
    return (
        <Link to = {`/coins/${props.id}`}>
        <div>
        <div className="StockContainer">
            
            <ol>
                <div className="StockBox" >
                    <li>
                        <div className= "image" >
                            <img src = {props.image} alt = 'crypto' />
                               
                        </div>

                    </li>
                    <div className="StockBox_a" >
                <li>
                   <h1 className="CompanyName">{props.name}</h1>
                </li>
                </div>
                <div className="StockBox_am" >
                <li>
                   <h1 className="Marketcap">${props.marketCap.toLocaleString('en-US')}</h1>
                </li>
                </div>
                <div className="StockBox_b">
                <li>
                    <div className="StockStatus">
                    {props.priceChange < 0 ? (
            <h1 className= 'red' >{props.priceChange.toFixed(2)}%</h1>
          ) : (
            <h1 className= 'green'> +{props.priceChange.toFixed(2)}%</h1>
          )}
                    </div>
                </li>
                </div>
                <div className="StockBox_b">
                <li>
                    <div className="StockStatus">
                    <h1>{props.priceChange < 0 ? <TrendingDown /> : <TrendingUp />}</h1>
                    </div>
                </li>
                </div>


                <div className="StockBox_c">
                <li>
                    <div className="StockPriceBox">
                        <h1 className="StockPrice">${props.price}</h1>
                    </div>
                </li>
                </div>
                </div>
            </ol>
</div>

</div>
</Link>
);
}




            
        
export default StockPage;