import '../../App.css';
import React from 'react';

export default function Tvshows(){
    return (
        <div
            style={{
                background: `url('${process.env.PUBLIC_URL}/img/tv-4.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            className = 'cities'
        >
            <h1>Series</h1>
        </div>
    );
}