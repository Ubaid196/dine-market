function checkerAndReturner(orgData:any, newData:any){
for (let index = 0; index < orgData.length; index++) {
    const element = orgData[index];
    if(element.productId == newData.productId){
        return element
    }
}
}

export function cartReducer(state:any,action:any){
    if(action.payload === "addToCart"){
       let response = checkerAndReturner(state.cart, action.data)
       if(!response){
        
        return{
            cart:[...state.cart, action.data]
        }
       }else{
        let dataToStoreAgain = state.cart.filter((item:any)=>item.productId !== response.productId)
        
        return{
            cart:[...dataToStoreAgain,action.data]
        }
       }
        
    }else if(action.payload==="removeToCart"){
        return " "
    }else if(action.payload==="updateToCart"){
        return state
    }
    
    return{
        state
    }
}




