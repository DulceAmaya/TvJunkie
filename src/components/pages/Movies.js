import '../../App.css';
import React from 'react';

export default function Movies(){
    return (
        <div
            style={{
                background: `url('${process.env.PUBLIC_URL}/img/movie-7.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            className = 'landscapes'
        >
            <h1>Películas</h1>
        </div>
    );
}