import React,{useReducer, useState} from "react";
import Contaxt from "./contaxt"
import {add} from "./funtionalprograming"
// import {Maps} from "./funtionalprograming"
import {Maps2} from "./funtionalprograming"


const Provider=({children}) => {
   const local=localStorage.getItem("items")
   let  datas =local? JSON.parse(local):[]
   let totalamount= (iteams) => {
    return  iteams.reduce((total,item) => { return total + (item.price * item.amount)},0)
 }
    let intialitem={
        items:datas,
        Totalprice:totalamount(datas)
    }
  
    const Reducer=(state,action) => {
        if (action.type === "clear") {
            return{
                items:[],
                Totalprice:0
            }
        }
        if  (action.type === "delete") {
       const json= localStorage.getItem("items")
        const localdata=JSON.parse(json)
        let filteredlocal=localdata.filter((items) => {return  items.id !== action.items.id})
        localStorage.removeItem("items")
        localStorage.setItem("items",JSON.stringify(filteredlocal))
         let filtered=state.items.filter((item) => {return item.id !== action.items.id})
         let totalprice;
            state.items = filtered
          totalprice=totalamount(state.items)
            return{
                items:state.items,
                Totalprice: totalprice,
            }
        }
        if  (action.type === "decrease") {
            return{
                items: Maps2(state.items,action.items),
                Totalprice: totalamount(state.items) ,
            }
        }
          if (action.type === "increase") {
            let isalready=state.items.findIndex((item) =>  item.id === action.items.id)
              state.items[isalready].amount++
                 return {
                  items:state.items,
                  Totalprice: totalamount(state.items) ,
              }
          }
          if (action.type === "addlay") {
            const alreadyitem =add(state.items,action.items)

             if (alreadyitem) {
                 alreadyitem.amount++;
               
               return {
                items:state.items,
                Totalprice: totalamount(state.items) ,
            } 
             }
             let  Totalprice
           let totalitems =state.items.concat(action.items)
             Totalprice=totalamount(totalitems)
             localStorage.setItem("items",JSON.stringify(totalitems))  
             return {
                items:totalitems,
                Totalprice:Totalprice,
            } 
          }
        
        return(
           state
        )
      
    }
   
const [itemlist,setitem] =useReducer(Reducer,intialitem);
    const additem=(items) => {
        setitem({
            type:"addlay",
            items:items
        })
    }
    const [ival2,chval2]=useState(false) 
   const toshow =(e) => {
    chval2(e)
   }
   const increase=(e) => {
     setitem(
         {
             type:"increase",
             items:e

         }
     )
   }

   const decrease=(e) => {
    setitem(
        {
            type:"decrease",
            items:e

        }
    )  
   }
   const clearall=(e) => {
    setitem(
        {
            type:"clear",
            items:e

        } )
   }
  
   const  deletelay=(e) => {
    setitem(
        {
            type:"delete",
            items:e

        })
     
   }
   const [oder,setorder]=useState("")
   const orderdata =(e) => {
    setorder(e)
  
   }
    const products={
        items:itemlist.items,
        Totalamounts:itemlist.Totalprice,
        valuetoshow:ival2,
        orders:oder,
        clear:clearall,
        datafromorder:orderdata ,
        toadd:additem,
        toshow:toshow,
        toincrease:increase,
        todelete:deletelay,
        todecrease:decrease,
      
        
    }

    console.log(products.items)
  
  
    return(
        <Contaxt.Provider value={products}>
            {children}
        </Contaxt.Provider>
    )
}

export default Provider