"use client"
import { oneProductType } from "@/components/utils/ProductsDataArrayAndTypes";
import { Component, ReactNode } from "react";

interface propsType{
    productArray:Array<oneProductType>
}

export default class AllProductsComponent extends Component<{productData:propsType}> {
    getData = ()=>{
        console.log(this.props.productData.productArray[0].price);
        
    }
    render(){
        return(
            <div onClick={this.getData}>{this.props.productData.productArray[0].price}</div>
        )
    }
}