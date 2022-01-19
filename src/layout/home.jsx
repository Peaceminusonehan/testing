import React from "react"
import Main from "../mainsection/main"
import Hero from "../hero/hero"
import Product from "../productlist/product"
import Layot from "../layout/layout"

const Homepage = () => {
    return(
        <>
          <Layot >
              <Hero></Hero>
              <Main></Main>
              <Product></Product>
          </Layot>
        </>
    )
}

export default Homepage ;
