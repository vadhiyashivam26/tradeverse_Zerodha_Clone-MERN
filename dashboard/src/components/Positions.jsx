import React, { useEffect, useState } from "react";
// import { positions } from "../data/data.js";
import axios from 'axios';

function Positions() {
    let [allPositions, setAllPositions] = useState([]);

    useEffect(() => {
        axios.get("https://tradeverse-zerodha-clone-mern.onrender.com/allPositions").then((res) => {
            console.log(res.data);
            setAllPositions(res.data);
        });
    }, [])

    return (
        <div>
            <h3 className="title">Positions ({allPositions.length})</h3>

            <div className="order-table">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Instrument</th>
                        <th>Qty.</th>
                        <th>Avg.</th>
                        <th>LTP</th>
                        <th>P&L</th>
                        <th>Chg.</th>
                    </tr>
                    {allPositions.map((stock, index) => {
                        const curValue = Number(stock.price) * Number(stock.qty);
                        const isProfit = curValue - Number(stock.avg) * Number(stock.qty) >= 0.0;
                        const profClass = isProfit ? "profit" : "loss";
                        const dayClass = stock.isLoss ? "loss" : "profit";

                        return (
                            <tr key={index}>
                                <td>{stock.product}</td>
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{Number(stock.avg).toFixed(2)}</td>
                                <td>{Number(stock.price).toFixed(2)}</td>
                                <td className={profClass}>
                                    {(curValue - Number(stock.avg) * Number(stock.qty)).toFixed(2)}
                                </td>
                                <td className={dayClass}>{stock.day}</td>
                            </tr>
                        )
                    })
                    }
                </table>
            </div>
        </div>
    );
};

export default Positions;