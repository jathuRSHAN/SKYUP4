import React from "react"
import { useEffect, useState } from "react"
import { UserDetailsApi } from "../../../services/Api";
import { isAuthenticated } from '../../../services/Auth';
import "./head.css"
import logo from "../../../../asset/logo1.png"
const Head = () => {
    const [user, setUser] = useState({ name: "", email: "", localId: "" })
    useEffect(() => {

        if (isAuthenticated()) {
            UserDetailsApi().then((response) => {

                setUser({
                    name: response.data.users[0].displayName,
                    email: response.data.users[0].email,
                    localId: response.data.users[0].localId,
                })
            })
        }


    }, []);
    return (
        <>
            <section className='head'>
                <div className='container d_flexsb'>
                    <div className='logo'>
                        <img src={logo} alt="" />

                    </div>

                    <div className='social'>
                        <div className="icon">
                            <i class="fa-solid fa-user"></i>
                        </div>

                        {isAuthenticated() ? <h3>{user.name.split(" ")[0]}</h3> : <a href="./signup">mystanskyupconnection</a>}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Head