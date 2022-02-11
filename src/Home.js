import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />



                <div className="home__row">
                    <Product 
                    id="1234335801"
                    title='The lean startup' 
                    price={299} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={4} />
                    <Product
                    id="5982"
                    title="Acer ED273 27 inch (68.58 cm) Full HD Curved LED Monitor I 250 Nits I 75Hz Refresh Rate I HDMI, DVI "
                    image="https://m.media-amazon.com/images/I/91YZIFUD-pL._SX679_.jpg"
                    price={18000}
                    rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                    id="27291788228"
                    title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
                    image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SX679_.jpg"
                    price={8000}
                    rating={3}
                     />
                    <Product
                    id="2729423214828"
                    title="2021 Apple iPad Pro with Apple M1 chip"
                    image="https://m.media-amazon.com/images/I/81+N4PFF7jS._SX466_.jpg"
                    price={124000}
                    rating={4}
                     />
                    <Product
                    id="2729532448828"
                    title="Samsung 138 cm (55 inches) Crystal 4K Series Ultra HD Smart LED TV "
                    image="https://m.media-amazon.com/images/I/613qHIDrUWS._SX679_.jpg"
                    price={66000}
                    rating={3}
                     />
                </div>
                <div className="home__row"> 
                <Product
                    id="27213459828"
                    title="Sony WH-1000XM4 Bluetooth Wireless Over Ear Headphones with Mic (Black)"
                    image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._SX679_.jpg"
                    price={10000}
                    rating={3}
                     />
                </div>
                <div className="home__row"> 
                <Product
                    id="27213459828"
                    title="Amazon Brand - Solimo Delphi 3 Seater"
                    image="https://m.media-amazon.com/images/I/71QB8+U+hXL._SY355_.jpg"
                    price={42000}
                    rating={3}
                     />
                <Product
                    id="2721345899828"
                    title="ASUS TUF Dash F15 (2021), 15.6-inch (39.62 cms) FHD 144Hz"
                    image="https://m.media-amazon.com/images/I/81mLxU0CcAL._SX679_.jpg"
                    price={69000}
                    rating={4}
                     />
                <Product
                    id="272134598228"
                    title="Baobab RATTANSingle Swing Basket Chair with Curve Stand for Kid's "
                    image="https://m.media-amazon.com/images/I/41jXTo8NreL._SX425_.jpg"
                    price={4000}
                    rating={3}
                     />
                </div>
            </div>
        </div>
    )
}

export default Home
