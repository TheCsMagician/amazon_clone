import React from 'react';
import "./Home.css";
import Product from "./Product"; 


function Home() {
    return (
        <div className="home">
            <img className = "home__image"
                src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt= ""
            />
             {/* Product */}
             <div className="home__row">
                <Product 
                    id="12321341"
                    title = "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={23.39}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    />
                <Product 
                    id="49538094"
                    title = "KitchenAid Artisan Design Series 5-Quart Tilt-Head Stand Mixer with Glass Bowl, Candy Apple Red"
                    price={510.99}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81QkLzXfKHL._AC_SL1500_.jpg"
                />
             </div>
             {/* Product */}
             <div className="home__row">
                <Product 
                    id="55538094"
                    title = "Smart Watch, Fitness Tracker Full Touch Screen Smart Watch, 5ATM Waterproof Smart Watch for Man / Woman with Heart Rate, Blood Oxygen, Sleep Monitor, 18 Sports Modes, Calorie Counter Compatible with Android and iOS (Black)"
                    price={59.88}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71fU5C2PNVL._AC_SL1500_.jpg"
                    />
                <Product 
                    id="46969095"
                    title = "Echo Plus (2nd gen) – Premium sound with built-in smart home hub - Charcoal"
                    price={99.99}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/61S20ybHHHL._AC_SL1000_.jpg"
                />
                <Product 
                    id="79836094"
                    title = "VANKYO MatrixPad Z10 Tablet, Android 9.0 Pie"
                    price={189.99}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/7199m%2ByETeL._AC_SL1500_.jpg"
                />
             </div>

             {/* Product */}
             <div className="home__row">
                <Product 
                    id="99568096"
                    title = 'Samsung 55" Q60T 4K Ultra HD HDR Smart QLED TV'
                    price={999.99}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/61KLsGIA8LL._AC_SL1500_.jpg"
                    />
             </div>


        </div>
       
    );
}

export default Home;
