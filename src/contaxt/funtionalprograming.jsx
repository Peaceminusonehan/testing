
export const add=(state,action) => {
    let isalready=state.findIndex((item) =>  item.id === action.id)
     return state[isalready]
   
}
export const inlay=(state,action) => {
    let isalready=state.findIndex((item) =>  item.id === action.id)
     return state[isalready]
   
}
export const Maps = (state,action) => {
    return  state.map((items) => {
           return items.id === action.id ? {...items,amount:items.amount+=1}:items
       })
   }
   export const Maps2 = (state,action) => {
       return  state.map((items) => {
              return items.id === action.id ? {...items,amount:items.amount === 1?   items.amount=1:items.amount-=1}:items
          })
      }