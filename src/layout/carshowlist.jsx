import { useNavigate } from "react-router"
import "./cartshow.scss"
import Layout from  "./layoucartt"


const Carshow =(props) => {
   
    return(
         <Layout>
          <div className="cartcontainer">
          <div className ="d-flex flex-column  justify-content-between align-items-between " >
         <h6>Pls Check out.Something is Wrong!</h6>
         <div>
              <button  className="btn1"  onClick={() => {props.set(false)}}  type="button" >
              Okay
             </button>
         </div>
    </div>
          </div>
         </Layout>
    )
}

export default Carshow;