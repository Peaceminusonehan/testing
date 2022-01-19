import "./icon.scss"
import { useContext } from "react"
import { useNavigate } from "react-router"
import Context from "../contaxt/contaxt"
import Shopicon from "../helpers/istockphoto-1206806317-612x612.jpg"

const Icon =() => {
    const navigat=useNavigate()
    const txt =useContext(Context)
   
    let  countnumber=txt.items.reduce((total,item) => {return total+item.amount},0)
    
  
    return(
        <div className="icon" onClick={() =>  navigat("/cart")}>
            <div>
            <img  src={Shopicon} alt="shopcart"/>
            </div>
           <div className="ct">
           <div className="counter">{countnumber}</div>
           </div>
        </div>
    )
}

export default Icon;