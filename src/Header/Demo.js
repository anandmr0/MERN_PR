import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, Form,FormControl,Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

  import './Demo.css'
  const aboutimg = require('../anand.jpg');
class Demo extends React.Component {
   
  
    render () {
     
  
      return (
        <section className="header">
            <div className="container-fluid">
            <div className="row">
            <Navbar bg="" expand="lg">
            <Navbar.Brand href="#home">
            <div className="col-md-2 header-logo">
                <img class="rounded-circle" alt="100x100" src={aboutimg} data-holder-rendered="true"/>
                <p>PretVA</p>
                                
                <h2>Making Fashion Easy </h2>
            </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <div className="col-md-6 header-nav">
          <Nav className="mr-auto">
          <Nav.Link className="nav-menu" href="#home"><strong>About</strong></Nav.Link>
            <Nav.Link  className="nav-menu" href="/search"><strong>Service</strong></Nav.Link>
            
           <Nav.Link  className="nav-menu" href="/search"><strong>Search</strong></Nav.Link>
           <Nav.Link  className="nav-menu" href="#home"><strong>Feedback & support</strong></Nav.Link>
            
          </Nav>
          </div>
        <div className="col-md-4 header-btn">
     
                    
        <button type="button" className="btn btn-sm btn-primary logout">Log Out</button>
                               
                                    <button id="btnGroupDrop1" type="button" className="btn btn-sm btn-outline-primary dropdown-toggle btn-myaccount" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My Account
                                    </button>
                                   
                              
                               
                            </div>
                            
                            </Navbar.Collapse>
                         </Navbar>
            </div>

            </div>
       
       
       
       
          
         
         
         
         
       
      </section>
      )
    }
  }

  export default Demo