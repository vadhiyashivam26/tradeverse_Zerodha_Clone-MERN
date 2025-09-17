import React from 'react'
import Navbar from "../Navbar.jsx"
import Footer from "../footer.jsx"
import Hero from "./Hero.jsx"
import LeftSection from "./LeftSection.jsx"
import RightSection from "./RightSection.jsx"
import Universe from "./Universe.jsx"
import kite from "../../assets/images/kite.png"
import coin from "../../assets/images/coin.png"
import varsity from "../../assets/images/varsity.png"
import console from "../../assets/images/console.png"
import kiteconnectAPI from "../../assets/images/kiteconnect.png"

function ProductPage() {
    return ( 
        <>
            <Hero/>
            <LeftSection 
                imageURL={kite} 
                productName="Kite" 
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, 
                    an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
                tryDemo="try Demo" 
                learnMore="Learn more" 
                googlePlay={""}
                appStore={""}
                />
                <RightSection 
                imageURL={console}
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                relatedLink="Learn More"
                />
                <LeftSection 
                imageURL={coin} 
                productName="Coin" 
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
                tryDemo="" 
                learnMore="" 
                googlePlay=""
                appStore=""
                relatedLink="Coin"
                />
                <RightSection 
                imageURL={kiteconnectAPI}
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                relatedLink="Kite Connect API"
                />
                <LeftSection 
                imageURL={varsity} 
                productName="Varsity mobile" 
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
                googlePlay=""
                appStore=""
                relatedLink=""
                />
                <p className='text-center mt-5 mb-5 fs-5'>Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/" style={{textDecoration: "None"}}>Zerodha.tech</a> blog.</p>
            <Universe />
        </>
    );
}

export default ProductPage;