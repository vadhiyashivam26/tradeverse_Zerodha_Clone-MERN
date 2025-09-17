import React, {useState, useEffect} from "react";
// import { holdings } from "../data/data.js"
import axios from 'axios';
import { VerticalGraph } from "./VerticalGraph";

function Holdings() {
    const [allHoldings, setAllHoldings] = useState([]);
    
    useEffect(() => {
        axios.get("https://tradeverse-zerodha-clone.onrender.com/allholdings").then((res)=>{
            // console.log(res.data);
            setAllHoldings(res.data);
        })
    }, [])

    const labels = allHoldings.map((subArray)=>subArray["name"]);

    const data = {
        labels,
        datasets: [
            {
                label : "Stock Price",
                data: allHoldings.map((stock)=>stock.price),
                backgroundColor: "rgba(7, 118, 149, 0.46)",
            },
        ],
    };

    return (
        <>
            <h3 className="title">Holdings ({allHoldings.length})</h3>
            <div className="order-table">
                <table>
                <tbody>
                    <tr>
                        <th>Instrument</th>
                        <th>Qty.</th>
                        <th>Avg. cost</th>
                        <th>LTP</th>
                        <th>Cur. val</th>
                        <th>P&L</th>
                        <th>Net chg.</th>
                        <th>Day chg.</th>
                    </tr>
                    {allHoldings.map((stock, index) => {
                        const curValue = Number(stock.price) * Number(stock.qty);
                        const isProfit = curValue - Number(stock.avg) * Number(stock.qty) >= 0.0;
                        const profClass = isProfit ? "profit" : "loss";
                        const dayClass = stock.isLoss ? "loss" : "profit";
                        
                        return (
                            <tr key={index}>
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{Number(stock.avg).toFixed(2)}</td>
                                <td>{Number(stock.price).toFixed(2)}</td>
                                <td>{curValue.toFixed(2)}</td>
                                <td className={profClass}>
                                    {(curValue - Number(stock.avg) * Number(stock.qty)).toFixed(2)}
                                </td>
                                <td className={profClass}>{stock.net}</td>
                                <td className={dayClass}>{stock.day}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>

            <div className="row">
                <div className="col">
                    <h5>
                        29,875.<span>55</span>{" "}
                    </h5>
                    <p>Total investment</p>
                </div>
                <div className="col">
                    <h5>
                        31,428.<span>95</span>{" "}
                    </h5>
                    <p>Current value</p>
                </div>
                <div className="col">
                    <h5>1,553.40 (+5.20%)</h5>
                    <p>P&L</p>
                </div>
            </div>
            <VerticalGraph data={data} />
        </>
    );
};

export default Holdings;