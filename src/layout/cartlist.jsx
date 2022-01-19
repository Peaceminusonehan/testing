import "./cartlist.scss"

const Cartlist =(items) => {
   
    return(
    <div className ="d-flex justify-content-center   align-items-center" >
         <h4>Pls Check out.Something is Wrong!</h4>
         <div>
              <button  onClick={() => { navigate("/shop")}}  type="button" >
               Back to Shop
             </button>
         </div>
    </div>
    )
}

export default Cartlist