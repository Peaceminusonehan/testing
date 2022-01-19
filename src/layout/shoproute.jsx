import React  from "react"
import { useNavigate } from "react-router"
import "./shoprout.scss"
import AOS from "aos"
const Lists =(product) => {
const {name,imgurl,id}=product
const navigate =useNavigate();
AOS.init();
    return(
        <div   data-aos="zoom-in"  data-aos-duration="2000"  className="col-lg-3 col-md-4 col-6 shadow p-3">
            <img src={imgurl} className="img-fluid" alt="coffe"></img>
            <h5 className="mt-3">{name}</h5>
           <div>
              <button onClick={() => {navigate("/singleproduct",{state:id})}} className="btn1"   type="button" >See More</button>
           </div>
        </div>
    )
}

export default Lists;