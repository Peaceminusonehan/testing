import React from "react"
import { useNavigate} from "react-router-dom"
import "./main.scss"
import AOS from "aos"
import Img from "../helpers/pexels-photo-1152077.jpeg"
const Main=() => {
  AOS.init();
      const navigate =useNavigate()
    return(
          
              <div  data-aos="zoom-in"  data-aos-duration="2000" className="seccontainer text-center mt-3 d-flex justify-content-center">
                 <div className="col-lg-6">
                     <img style={{width:"20rem",borderRadius:"5px"}} src={Img} alt="shop"/>
                     <h2>Bags</h2>
                     <p >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                       <button onClick={() => {navigate("/shop")}}  type="button"  id="shop_now"  >Shop now</button >
                 </div>
                </div>
           
      
    )
}

export default Main;