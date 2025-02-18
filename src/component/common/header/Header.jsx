import React, { useState } from 'react'
import './header.css';
import { menu } from '../../data';
import DropdownMenu from './DropdownMenu';
// import SearchComponent from './SearchComponent';
import { Link } from "react-router-dom"
import DarkMode from './darkmode/DarkMode';

export default function Header() {
    // const sampleData = ["Apple", "Banana", "Orange", "Grape", "Pineapple", "Mango"];
    const [clik, setclik] = useState(false);
    const toggleMenu = () => {
        setclik(!clik);
    }
    return (
        <>
            <header >
                <div className="container">
                    <nav className={clik ? "mobleview d_flexsb" : "d_flexsb container"}>
                        <div className="left d_flex">
                            <div className="menubutton"><button onClick={toggleMenu}><i class="fa-solid fa-bars"></i></button></div>
                            <div className="logo"><a href='./'><h1>SKY<span>UP</span></h1></a></div>
                            {/* <div className="log"><img src="./logo/logo.png" alt="" /></div> */}
                            <div className="dropdown"><DropdownMenu /></div>
                        </div>
                        {/* <div className="center"><SearchComponent data={sampleData} /></div> */}
                        <div className="right d_flex">

                            <div className="navbar d_flex">
                                {
                                    menu.map((item, i) => (
                                        <ul>
                                            <li>
                                                <a href={item.url}>{item.text}</a>
                                            </li>
                                        </ul>

                                    ))
                                }
                            </div>
                            <div className="button d_flex">
                                <div className="theme"><DarkMode /></div>
                                <button className="lonin"><a href="">login</a></button>
                                <button className="signin"><Link to="">Signup</Link></button>
                                {/* <button className="lonin"><a href="/login">login</a></button>
                                <button className="signin"><Link to="./Signup">Signup</Link></button> */}
                            </div>

                        </div>

                    </nav>
                </div>
            </header>

        </>
    )
}
