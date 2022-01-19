import React from "react"
import { createPortal } from "react-dom/cjs/react-dom.development"
import "./layoutcart.scss"

const Layout =({children}) => {
    return(
        <div className="layout row">
              {children}
        </div>
    )
}

const layoutportal =({children}) => {
    return(
         createPortal(< Layout>{children}</Layout>,document.getElementById("overlay"))
    )
}

export default layoutportal;