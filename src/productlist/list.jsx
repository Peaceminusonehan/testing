import React from "react"
import { useNavigate } from "react-router"
import "./list.scss"
import AOS from "aos"
const Lists =(product) => {
    AOS.init();
const {name,imgurl,price}=product
const navigate=useNavigate();
     
    return(
        <div    data-aos="zoom-in"  data-aos-duration="2000"  className="col-lg-3 col-md-6 col-6 shadow p-3"  >
            <img src={imgurl} className="img-fluid" alt="coffe"></img>
            <h5 style={{fontWeight:"550"}} className="mt-3">{name}</h5>
            <span>{price}$</span>
           <div>
            <button className="btn1" onClick= { () => {navigate("/shop")}}  type="button" >Go to Shop</button>
           </div>
        </div>
    )
}

export default Lists;