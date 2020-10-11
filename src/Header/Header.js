import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import NotifyMe from 'react-notification-timeline';

import {
    BrowserRouter as Rautor,
    Link
  } from 'react-router-dom'
  import { FaHamburger } from "react-icons/fa";
 
  const aboutimg = require('../anand.jpg');
  
function Header()
{
    return(
           <section className="header">
               
                         
                   <nav className="navbar navbar-expand-lg navbar-light  header-navi  ">
                      
                                
                            
                            <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            >
                           <FaHamburger/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="row">
                                <div className="col-md-2 header-logo">
                                <img className="rounded-circle" alt="100x100" src={aboutimg} data-holder-rendered="true"/>
                                <p>PretVA</p>
                                
                                <h2>Making Fashion Easy </h2>
                                </div>
                                <div className="col-md-6 header-nav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">About</a>
                                </li>
                                
                                <li className="nav-item">
                                <a className="nav-link" href="#">Service</a>
                                </li>
                                <li className="nav-item">
                                <Link to="/search" ><a className="nav-link active" href="#">Search</a></Link> 
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Feedback & support</a>
                                </li>
                                
                            </ul>
                            </div>
                            
                            <div className="col-md-4 header-btn">
                            {/*  */}
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                               
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-sm btn-outline-primary dropdown-toggle btn-myaccount" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My Account
                                    </button>
                                   
                                </div>
                                
                               

                                </div>
                                <button type="button" className="btn btn-sm btn-primary logout">Log Out</button>
                            </div>
                            </div>
                            </div>
                           
                            
                        </nav>
                       
                        

           </section>
    );
}
export default Header