import React from 'react'
import './Logo.css';

function Logo() {
    return (
        <div className='container'>
            <p className='logo-font'>Tv Junkie</p>
            <img src="img/tv.png" alt="icon" className="tv-icon"/>
        </div>
    )
}

export default Logo;
