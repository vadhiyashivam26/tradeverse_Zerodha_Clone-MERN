import React, { useState, useContext } from "react";
import { watchlist } from "../data/data.js"
import { Tooltip, Grow } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import GeneralContext from "./GeneralContext.jsx";
import { DoughnutChart } from "./DoughnutChart.jsx";

function WatchList() {

    const labels = watchlist.map((subArray)=> subArray["name"]);
    const data = {
        labels,
        datasets: [
            {
                label: "Stock Watchlist",
                data: watchlist.map((stock)=> stock.price),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="watchlist-container">
            <div className="search-container">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                    className="search"
                />
                <span className="counts"> {watchlist.length} / 50</span>
            </div>

            <ul className="list">
                {
                    watchlist.map((stock, index) => {
                        return <WatchLIstItem stock={stock} key={index} />
                    })
                }
            </ul>

            <DoughnutChart data={data} />
        </div>
    );
};

export default WatchList;

const WatchLIstItem = ({ stock }) => {
    const { showWatchlistAction, setShowWatchlistAction } = useState(false)

    const handleMouseEnter = (evt) => {
        setShowWatchlistAction(true);
    }

    const handleMouseExit = (evt) => {
        setShowWatchlistAction(false)
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"} style={{ fontWeight: "700" }}>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ? (
                        <KeyboardArrowDownIcon className="down" />
                    ) : (
                        <KeyboardArrowUpIcon className="up" />
                    )}
                    <span className="price">{stock.price}</span>
                </div>
            </div>
            {showWatchlistAction || <WatchListActions uid={stock.name} />}
        </li>
    );
};

const WatchListActions = ({ uid }) => {
    const generalContext = useContext(GeneralContext);

    const handleBuyClick = () => {
        generalContext.openBuyWindow(uid);
    };

    const handleSellClick = () => {
        generalContext.openSellWindow(uid);
    };

    return (
        <span className="actions">
            <span>
                <Tooltip title="Buy (B)" placement="top" arrow slots={{ transition: Grow }}>
                    <button className="buy action" onClick={handleBuyClick}><span>B</span></button>

                </Tooltip>
                <Tooltip title="Sell (S)" placement="top" arrow slots={{ transition: Grow }}>
                    <button className="action sell" onClick={handleSellClick}><span>S</span></button>
                </Tooltip>
                <Tooltip title="Analytics (A)" placement="top" arrow slots={{ transition: Grow }}>
                    <button className="action">
                        <BarChartOutlinedIcon className="icon" />
                    </button>
                </Tooltip>
                <Tooltip title="More" placement="top" arrow slots={{ transition: Grow }}>
                    <button className="action">
                        <MoreHorizOutlinedIcon className="icon" />
                    </button>
                </Tooltip>
            </span>
        </span>
    );
};