import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
    const [sellStockQuantity, setSellStockQuantity] = useState(1);
    const [sellStockPrice, setSellStockPrice] = useState(0.0);

    const handleSellClick = () => {
        axios.post("http://localhost:3002/newOrder", {
            name: uid,
            qty: sellStockQuantity,
            price: sellStockPrice,
            mode: "SEll",
        });

        GeneralContext.closeSellWindow();
    };

    const handleCancelClick = () => {
        GeneralContext.closeSellWindow();
    };

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setSellStockQuantity(e.target.value)}
                            value={sellStockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(e) => setSellStockPrice(e.target.value)}
                            value={sellStockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <Link className="btn btn-blue" onClick={handleSellClick}>
                        Sell
                    </Link>
                    <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;
