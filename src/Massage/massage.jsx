import { useContext,useEffect ,useState} from "react"
import contaxt from "../contaxt/contaxt"
import { useNavigate } from "react-router"
import "./massage.scss"
import Layout from "../layout/layout"
 

const Massage=() => {
    const vavigate =useNavigate();
    const txt =useContext(contaxt);
    const totalamount =txt.Totalamounts.toFixed(2)
    const { name,email,address,dateandtime,} =txt.orders
    const [ival,chval]=useState(false)
     useEffect(() => {
        if (txt.orders) {
            chval(true)     
        }
     },[txt.orders])
    return(
        <Layout>
            <div className="py-5 row text-center d-flex massage  justify-content-center align-items-center">
              
               {ival === true &&  <div className="col-lg-6  col-md-7 col-8 py-4 mas shadow">
                <h4 className="mb-5">Thank You {name}!</h4>
                <h5 className="mb-4">We will Deliver Your Orders to {address} at {dateandtime}</h5>
                <div style={{fontWeight:"500"}} className="mb-4 div"> Check Your Email. We have send more informations to {email} </div>
                <span className="mb-3">Totalamount : {totalamount} $</span>
               <div>
                  <button onClick={() => {vavigate("/shop")}} className="btlay mt-4">Back To Shop</button>
               </div>
                </div>}
                {ival=== false && <div className="col-lg-6  col-md-7 col-8 py-4 shadow"> 
                    <h3> No Massages here! </h3> 
                    <button onClick={() => {vavigate("/home")}} className="btlay mt-4">Back To Home</button>
                    </div>}
                
            </div>
        </Layout>
    )
}
export default Massage;
