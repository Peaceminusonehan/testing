import React from "react";


import Footer from "../footer/footer"
import Nav from "../nav/nav";



const layout =({children},props) => {
    return(
        <>
        <Nav  tishow={props.tishow}></Nav>
        <main>
           {children}
        </main>
        <Footer></Footer>
        </>
    )
}

export default layout;