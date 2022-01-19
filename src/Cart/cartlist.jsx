import "./cartlist.scss"
import { useContext } from "react"
import AOS from "aos"
import contact from "../contaxt/contaxt"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import  {faTrash,faPlus,faMinus} from "@fortawesome/free-solid-svg-icons"


const Cartlist =(products) => {
    const txt =useContext(contact)
  
   
    const increase=() => {
        txt.toincrease(
            {...products}
        )
      }
      const decrease=() => {
       txt.todecrease(
           {...products}
       )
      }
      const delet=() => {
          txt.todelete({
              ...products
          })
      }
    
      const {name,imgurl,amount,price}=products
      AOS.init();
    return(
       <>
       <div   data-aos="zoom-in"  data-aos-duration="2000" className=" col-lg-3 col-md-4 col-8 shadow p-4">
         <div  className="mb-4 ">
             <img  className="img-fluid img" src={imgurl} alt="shop" />
         </div>
         <div>
             <h4  className="mb-4">{name}</h4>
             <span>{price} $</span>
             <div  className="mb-4">× {amount}</div>
             <div className="icon mt-3">
             <FontAwesomeSvgIcon className="icons" onClick={increase} icon={faPlus} ></FontAwesomeSvgIcon>
             <FontAwesomeSvgIcon  className="icons"  onClick={decrease}  icon={ faMinus} ></FontAwesomeSvgIcon>
             <FontAwesomeSvgIcon className="icons"  onClick={delet} icon={faTrash} ></FontAwesomeSvgIcon>
             </div>
         </div>
         </div>
       </>
    )
}

export default Cartlist;