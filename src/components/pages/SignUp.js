import '../../App.css';
import React from 'react';

export default function SignUp(){
    return (
        <div
            style={{
                background: `url('${process.env.PUBLIC_URL}/img/img-13.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            className = 'sign-up'
        >
            <h1>Sign up!</h1>
        </div>
    );
}