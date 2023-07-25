"use client";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndTypes";
import { Component, ReactNode } from "react";

interface propsType {
  productArray: Array<oneProductType>;
}

export default class AllProductsComponent extends Component<{
  productData: propsType;
}> {
  start: number = 10;
  getData = () => {
    console.log(this.props.productData.productArray[0].price);
    console.log(this.props.productData);
  };
  render(): ReactNode {
    return <div onClick={this.getData}>HI</div>;
  }
}
