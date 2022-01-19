import List from "./list"
import img2 from "../helpers/71e4FOdkd2L._AC_UY500_.jpg"
import img1 from "../helpers/ab564419370095f6c76a3361c36d2d8a.jpg"
import img3 from "../helpers/Top-10-Travel-Bags-Travel-Bag-Bag-Classic-Pattern-Handbag-L-Bag-Hand-Bag-Ladies-Handbags.jpg"
import img4 from "../helpers/military-style-bag-isolated-white-canvas-backpack-front-view-modern-waterproof-camping-traveler-back-pack-bag-military-211260863.jpg"
import img5 from "../helpers/mila-eve.jpg"
import img6 from "../helpers/istockphoto-1298646163-612x612.jpg"
import img7 from "../helpers/group_3.png"
import img8 from "../helpers/patagonia-mini-man-bag-500x500.jpg"
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
].map((product) => {return <List {...product} key={product.id}></List> })

const Product =() => {
  return (
    <div className="container mt-4  text-center">
      <div className="row g-3    d-flex flex-lg-row flex-md-row justify-content-between align-items-center flex-column ">
        {shopdatas}
      </div>
    </div>
  )
}

export default Product;
