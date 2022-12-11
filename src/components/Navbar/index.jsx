import React from 'react';
import "./index.scss"
import logo from "../../assets/Images/LOGO.png"
const index = () => {
    return (
        <>
            <header className='header'>
                <div className="container">
                    <nav className='header_nav'>
                       <img src={logo} alt="logo" />
                        <ul className='header_nav_ul'>
                            <li className='header_nav_ul_li'>Menu</li>
                            <li className='header_nav_ul_li'>About</li>
                            <li className='header_nav_ul_li'>Feature</li>
                            <li className='header_nav_ul_li'>Gallary</li>
                        </ul>
                        <button className='header_nav_button'>Buy Now</button>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default index;