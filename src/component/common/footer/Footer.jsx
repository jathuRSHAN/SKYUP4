import React from "react"
import { social } from '../../data'
// import Send from '@mui/icons-material/Send';
import "./footer.css"

const Footer = () => {
    return (
        <>
            {/* <section className='newletter'>
                <div className='container flexsb'>
                    <div className='left row'>
                        <h1>Newsletter - Stay tune and get the latest update</h1>
                        <span>Far far away, behind the word mountains</span>
                    </div>
                    <div className='right row flexsb'>
                        <input type='text' placeholder='Enter email address' />
                        <i><Send /></i>
                    </div>
                </div>
            </section> */}
            <footer>
                <div className='container flexa'>
                    <div className='box logo flexa'>
                        <div className="logo"><h1>SKY<span>UP</span></h1></div>
                        <span>ONLINE EDUCATION & LEARNING</span>
                        <p>Skyup provides comprehensive freelancing courses and training sessions to help students build successful online careers.</p>
                        <div className="social flexa">
                            {social.map((item, i) => (
                                <a href={item.url} className='icon'> <i >{item.icon}</i></a>
                            ))}
                        </div>
                    </div>
                    <div className="ditels">
                        <div className='box link'>
                            <h3>Explore</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Courses</li>
                                <li>Blog</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div className='box link'>
                            <h3>Quick Links</h3>
                            <ul>
                                <li>Contact Us</li>
                                <li>Pricing</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy</li>
                                <li>Feedbacks</li>
                            </ul>
                        </div>
                    </div>

                    <div className='box last'>
                        <h3>Have a Questions?</h3>
                        <ul>
                            <li>
                                <i className='fa fa-map'></i>
                                No- 331, Trincomalee, Srilanka
                            </li>
                            <li>
                                <i className='fa fa-phone-alt'></i>
                                +94 76 000 7822
                            </li>
                            <li>
                                <i className='fa fa-paper-plane'></i>
                                skyup.official01@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className='legal'>
                <p>
                    Copyright ©2025 All rights reserved | by Skyup
                </p>
            </div>
        </>
    )
}

export default Footer