import List from "./shoplist"
import img1 from "../helpers/3.jpeg"
import img2 from "../helpers/4.jpeg"
import img3 from "../helpers/5.jpeg"
import img4 from "../helpers/6.jpeg"
const shopdatas =[
    {  
      name:"Product1",
      imgurl:img1,
      price:`${20}$`,
      id:Math.random(2)
    },
    {  
      name:"Product2",
      imgurl:img2,
      price:`${40}$`,
      id:Math.random(2)
    },
    {  
      name:"Product3",
      imgurl:img3,
      price:`${30}$`,
      id:Math.random(2)
    },
    {  
      name:"Product4",
      imgurl:img4,
      price:`${50}$`,
      id:Math.random(2)
    },
].map((product) => {return <List {...product} key={product.id}></List> })

const Shop =() => {
  return (
    <div className="container mt-4  text-center">
      <div className="row g-3    d-flex flex-lg-row flex-md-row justify-content-between align-items-center flex-column ">
        {shopdatas}
      </div>
    </div>
  )
}

 export default Shop;