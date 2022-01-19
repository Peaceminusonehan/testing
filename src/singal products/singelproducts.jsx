
import { useContext,useEffect,useState } from "react"
import { useNavigate } from "react-router"
import "./singel.scss"
import Layot from "../layout/layout"
import { useLocation } from "react-router"
import contaxt from "../contaxt/contaxt"
import img2 from "../helpers/71e4FOdkd2L._AC_UY500_.jpg"
import img1 from "../helpers/ab564419370095f6c76a3361c36d2d8a.jpg"
import img3 from "../helpers/Top-10-Travel-Bags-Travel-Bag-Bag-Classic-Pattern-Handbag-L-Bag-Hand-Bag-Ladies-Handbags.jpg"
import img4 from "../helpers/military-style-bag-isolated-white-canvas-backpack-front-view-modern-waterproof-camping-traveler-back-pack-bag-military-211260863.jpg"
import img5 from "../helpers/mila-eve.jpg"
import img6 from "../helpers/istockphoto-1298646163-612x612.jpg"
import img7 from "../helpers/group_3.png"
import img8 from "../helpers/patagonia-mini-man-bag-500x500.jpg"
import AOS from "aos"

const shopdatas =[
  {  
    name:"Cute Wonmen Hangbag",
    imgurl:img1,
    price:100.32,
    id:1
  },
  {  
    name:"Crossbody Men Bag",
    imgurl:img2,
    price:120.87,
    id:2
  },
  {  
    name:"Travel Bag for Wonmen",
    imgurl:img3,
    price:130.64,
    id:3
  },
  {  
    name:"Military Style Bag",
    imgurl:img4,
    price:125.98,
    id:4
  }, {  
    name:"Handbag for Wonmen",
    imgurl:img5,
    price:150.34,
    id:5
  },
  {  
    name:"Crossbody bag for Wonmen",
    imgurl:img6,
    price:140.65,
    id:6
  },
  {  
    name:"School Bags",
    imgurl:img7,
    price:90.97,
    id:7
  },
  {  
    name:"Bag for Mens",
    imgurl:img8,
    price:104.23,
    id:8
  },
]
const Singal =() => {
  const navigate =useNavigate();
  const txt =useContext(contaxt);
    const [ival,chval]=useState({})
    const location =useLocation()
     console.log(location.state)
     const toadddata=() => {
      txt.toadd({
           ...ival,
          amount:1
      })
  }
  const toadddata2=() => {
   
    let newitem={
      ...ival,
        amount:1
    }
    txt.toadd(newitem)
}
    useEffect(() => {
        const indexlay= shopdatas.findIndex((items) => items.id ===  location.state )
        console.log(indexlay)
        let lists=shopdatas[indexlay];
        chval(lists)
    },[location.state])
    const {name,imgurl,price}=ival
    const isalready=txt.items.find((item) => item.id === ival.id
)
    // const {name,imgurl,price} =location
    AOS.init();
    return(
        <Layot>
         
            <div   data-aos="zoom-in"  data-aos-duration="2000"  className="py-5 text-center d-flex flex-column justify-content-center align-items-center ">
                  <div >
                      <img  className="img2 img-fluid"  src={imgurl}  alt="product"></img>
                  </div>
                  <div className="mt-4">
                      <h5>{name}</h5>
                     <span>{`Price   ${price}$`}</span>
                    <main>
                    {!isalready &&<button className="btn1" onClick={toadddata}  type="button" >Add to Cart</button>}
                    {isalready &&<button style={{backgroundColor:"lightgrey"}} className="btn2"  onClick={toadddata2}  type="button" className="btn2">Add More</button>}
                    </main>
                    <button  className="btn1" onClick={() => { navigate("/shop")}}  type="button" >
                         Back to Shop
                    </button>
                  {isalready &&  <div>
                   <button  className="btn1" onClick={() => { navigate("/cart")}}  type="button" >
                        Go to Cart
                    </button>
                   </div>} 
                  </div>
            </div>
        </Layot>
    )
}

export default Singal;