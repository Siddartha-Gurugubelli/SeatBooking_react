import React from "react";
import { Link } from "react-router-dom";
import seat from '../seat.jpg'


export function Home() {
    return (
        <>
            <div>
                <h1 className="Heading"> Welcome to Online Seat Booking</h1>
            </div>


            <div className='login'>
                <Link to='AdminLogin'>Admin_Login </Link>
                <Link to='UserLogin' >User_Login</Link>
            </div>
            <div className='c'>
                <img src={seat} alt="seats" height='300' />
            </div>
        </>
    )
}

