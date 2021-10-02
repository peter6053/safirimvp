import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import logo from '../../assets/logo.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

function Footer() {
       return (
              <footer >
                     <div className="footer-container">
                            <div className="footer-container__brand">
                                   <img src={logo} alt="Brand Logo" />
                                   <p>The very fact that you are aware of suffering is enough reason for you to be enjoyed that you are alive.</p>
                            </div>
                            <div className="footer-container__quick">
                                   <h3>Quick Links</h3>
                                   <ul className="footer-container__quick--links">
                                          <li><Link to = "">About Us</Link></li>
                                          <li><Link to = "">Savings</Link></li>
                                          <li><Link to = "">Accounts</Link></li>
                                          <li><Link to = "">Dashboard</Link></li>
                                   </ul>
                            </div>
                            <div className="footer-container__helps">
                                   <h3>Help</h3>
                                   <ul className="footer-container__helps--help">
                                          <li><Link to = "">Contact Us</Link></li>
                                          <li><Link to = "">FAQ</Link></li>
                                   </ul>
                            </div>
                            <div className="footer-container__social">
                                   <h3>Follow Us</h3>
                                   <ul className="footer-container__social--app">
                                          <li><Link to = ""><img src={facebook} alt="facebook" /></Link></li>
                                          <li><Link to = ""><img src={twitter} alt="twitter" /></Link></li>
                                          <li><Link to = ""><img src={instagram} alt="instagram" /></Link></li>
                                   </ul>
                            </div>
                     </div>
              </footer>
       )
}

export default Footer
