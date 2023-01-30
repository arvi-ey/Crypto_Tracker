import React from 'react'
import './Graphbox.css';
import { useParams } from 'react-router-dom';
import {useState,useEffect} from "react";
import moment from "moment";
import { CoinDetail } from './CoinDetail';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
}from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
const  Graphbox = ()=> {
const {id} = useParams();
const [coin , setCoin]=useState();
const coin_api = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`
useEffect(() => {
  axios
    .get(coin_api)
    .then(res => {
      setCoin(res.data);
      console.log(res.data);
    })
    .catch(error => console.log(error));
}, []);
console.log(coin);
if(!coin) {
  return (
    <div className="Loading_container">
    <h1> Loading... </h1>
    </div>
  )
}
const coinChartData = coin.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));

const options = {
  responsive: true,
  scales:{
    y:{
      grid:{
        display:false
      },
      ticks:{
        callback:(value , index , values)=>{
          return new Intl.NumberFormat("en-US",{
            style : 'currency',
            currency:'USD',
          }).format(value);

        }
      }
    },
    x:{
      grid:{
        display:false
      }
    }
  }
}
const data = {
  labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
  datasets: [
    {
      fill: true,
      label: id,
      data: coinChartData.map(val => val.y),
      borderColor: 'blue',
      tension:0.0,
  
      
    }
  ]
}
  return (
    <> 
    <div>
    <div className='main_div'>
      <div>
    <CoinDetail
    name={id}
    />
    </div>
    <div className='graph_page' >
        <div className='coin_content'>
          <div className='Line_chart'>
          <h1> <Line options={options} data={data} /> </h1>   
          </div>
        </div>
        {/* <div className='underLine_chart'>
        <div className='bar_chart'>
          <h1> Bar Chart</h1>
        </div>
        <div className='donut_chart'>
          <h1>Donut chart</h1>
        </div>
        </div> */}
    </div>
    </div>
    </div>
    </>
  )
}
export default Graphbox;
