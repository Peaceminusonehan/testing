import React,{useState,useEffect,useContext} from "react"
import context from "../contaxt/contaxt"
import { useNavigate } from "react-router";
import "./oder.scss"
import Layout from "../layout/layout"
import Error from "../layout/carshowlist"
import AOS from "aos"
const Order =() => {
  AOS.init();
    const navigate=useNavigate()
    const txt =useContext(context)
    const [ival1,chval1]=useState("")
    const[valid1,setval1]=useState(false)
    const [ival2,chval2]=useState("")
    const[valid2,setval2]=useState(false)
    const [ival3,chval3]=useState("")
    const[valid3,setval3]=useState(false)
    const [ival4,chval4]=useState("")
    const[valid4,setval4]=useState(false)
    const [isfromvalid,setvalid]=useState(false)
    const [erro,seterror]=useState(false)
    const date =new Date()
    const year=date.getFullYear()
    // const dates=date.getDate()
    // const month =date.getMonth();
 

    useEffect(() => {
        console.log("here")
     const inter =setInterval(() => {
        if (ival1.length >=3 ) {
            setval1(true) 
          }else{
            setval1(false) 
          }
          if (ival2.includes("@")) {
            setval2(true)   
          }else{
            setval2(false) 
          } 
          if (ival3.length >10 ) {
            setval3(true)   
          }else{
            setval3(false) 
          }
          if (ival4.includes(year)) {
            setval4(true)   
          }else{
            setval4(false) 
          }
     },1000)
     return () => {
         clearInterval(inter)
     }
    },[ival1,ival2,ival3,ival4,year])
    const  inputval1=(e) => {
           chval1(e.target.value)
    }
    const  inputval2=(e) => {
        chval2(e.target.value)
 }
 const  inputval3=(e) => {
    chval3(e.target.value)
}
const  inputval4=(e) => {
    chval4(e.target.value)
    console.log(e.target.value)
}
const [oser,setorder]=useState(false)
const submid=(e) => {
   e.preventDefault()
   const verify = valid1 === true && valid2 === true && valid3 === true && valid4 === true 
  if ( verify === true) {
    setvalid(true)
  }else {
     seterror(true)
  }
  const datas={
      name:ival1,
      email:ival2,
      address:ival3,
      dateandtime:ival4
  }

  if (isfromvalid === true) {
     txt.datafromorder(datas)
     setorder(true)
  }else{
    return
  }
  
}
    return(
        <Layout>
             {erro === true && <Error set={seterror} />}
            <div  data-aos="zoom-in"  data-aos-duration="1500">
           
                <form className="d-flex flex-column justify-content-center align-items-center form">
                    <label > Enter Your Name </label>
                    <input placeholder="Enter Your Name" className={valid1 === true ? "input":"input1"}  onChange={inputval1} type="text"></input>
                    <label> Enter Your Email </label>
                    <input  placeholder="Example:Example@gmail.com" className={valid2 === true ? "input":"input1"}  onChange={inputval2} type="email"></input>
                    <label> Enter Your Address </label>
                    <textarea placeholder="Example: Yangon/Insein/Mingyi Road/No.29"  className={valid3 === true ? "area":"area1"}  onChange={inputval3} ></textarea>
                    <label >Enter Date to Deliver</label>
                    <input  className={valid4 === true ? "input":"input1"}   onChange={inputval4} type="date"></input>
                    <main>
                      {oser === false &&  <button  onClick={submid} > Comfirm </button>}
                     {oser === true && <button onClick={() => {navigate("/massage")}}>Order</button>}
                    </main>
                    <button  onClick={() => { navigate("/cart")}}  type="button" >
                         Back to Cart
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default Order;