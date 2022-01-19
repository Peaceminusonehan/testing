const shoplists =(product) => {
  
    const {name, imgurl,price}=product
        return(
            <div className="col-lg-3 col-md-6 col-6 shadow p-3">
                <img src={imgurl} className="img-fluid" alt="coffe"></img>
                <h5 style={{fontWeight:"600"}} className="mt-3">{name}</h5>
                <span>{price}</span>
               <div>
                   <button type="button" className="btn2">Shop Now</button>
               </div>
            </div>
        )
    }
    
    export default shoplists;