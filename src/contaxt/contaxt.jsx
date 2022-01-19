import {createContext} from "react"
const contact =createContext(
    {
        items:[],
        Totalamounts:0,
        valuetoshow:false,
        orders:{},
        clear:() => {},
        datafromorder:() => {},
        toadd:() => {},
        toshow:() => {},
        toincrease:() => {},
        todelete:() => {},
        todecrease:() => {},
       
    }
) 

export default contact
  
