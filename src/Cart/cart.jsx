import React,{useContext,useState} from "react"
import "./cart.scss"
import contaxt from "../contaxt/contaxt"
import Layot from "../layout/layout"
import List from "./cartlist"
import { useNavigate } from "react-router"
const Cart =() => {
    const navigate =useNavigate();
    const txt =useContext(contaxt)
    const totalmaount =txt.Totalamounts.toFixed(2)
    const lists =txt.items.map((items) => {return <List {...items} key={items.id}/>})
    const isalready =txt.items.length > 0
    const clear =() => {
        txt.clear({})
    }
     return(
         < Layot>
           <div className="text-center">
            <main>
                { isalready === false && <h4 className="mt-5" style={{fontWeight:"600"}}>There are no Items in Your Cart</h4>}
                {  isalready === true &&  <h4 style={{fontWeight:"600"}}>Your Cart</h4>}
            </main>
            {isalready === true &&   <h4 className="mt-4" style={{fontWeight:"550"}}>Totalamount {totalmaount} $</h4>}
           </div>
          <div className="py-5  ">
               <div className=" row  text-center d-flex flex-md-row flex-lg-row  flex-column justify-content-center align-items-center">
               {lists}
               </div>
          </div>
         <div className="text-center d-flex flex-column justify-content-center align-items-center"> 
             { isalready === true &&  <button  onClick={() => {navigate("/Order")}} className="btn1"  type="button" >
                        Order
             </button>}
             <button  className="btn1"  onClick={() => { navigate("/shop")}}  type="button" >
               Back to Shop
             </button>
            { isalready === true && <button  className="btn1"  onClick={clear}  type="button" >
              Clear All
             </button>} 
         </div> 
         </Layot>
     ) 
}

export default Cart;