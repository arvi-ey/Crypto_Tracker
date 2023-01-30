import React from "react";
import StockPage from "./StockPage";
import './StockBox.css'
import Graphbox from "./Graphbox";
import { useState,useEffect } from 'react';
import axios from 'axios';
// import { CoinDetail } from "./CoinDetail";
const StockBox = ()=>{
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  
  // const history =  createBrowserHistory();;

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        // console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
    return (
        <>
        <div className="Home_DIV">
        <div className='coin_search'>
        <h1 className='search_text'>Search Coin</h1>
        <form>
          <input
            className='coin_input'
            type='text'
            onChange={handleChange}
            placeholder='Search...'
          />
        </form>
      </div>
        <div className="mainbox">
        <div className="stockBox" >
        {filteredCoins.map(coin => {
        return (
          <StockPage 
          // onClick = {()=> history.pushState(`/coins/${coins.id}`)}
          id = {coin.id}  
          image = {coin.image}
            name = {coin.name}
            priceChange = {coin.price_change_percentage_24h}
            price={coin.current_price}
            marketCap={coin.market_cap}
          />
        );
      })}
            </div> 
        </div>
        </div>
        </>
    )
}



export default StockBox;


































