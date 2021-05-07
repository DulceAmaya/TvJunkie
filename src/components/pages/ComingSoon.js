import '../../App.css';
import React from 'react';

export default function ComingSoon(){
    return (
        <div
            style={{
                background: `url('${process.env.PUBLIC_URL}/img/img-12.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            className = 'sign-up'
        >
            <h1>Coming soon</h1>
        </div>
    );
}