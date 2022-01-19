import React from "react"
import {Link} from "react-router-dom"
import Icon from "./icon"
import "./nav.scss"
import AOS from "aos"

const Nav =() => {
    AOS.init();
    return(
        <nav  data-aos="zoom-in"  data-aos-duration="1500" className=" Nav"  >
        <div  className=" container d-flex justify-content-between  p-3">
           <div>
               <h3>NOMAD</h3>
           </div>
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
               
            </ul>
        </div>
        <div>
            <Icon ></Icon>
        </div>
        </div>
        </nav>
    )
}

export default Nav;