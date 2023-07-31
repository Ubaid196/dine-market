"use client";
import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndTypes";
import { Component, ReactNode } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../Card";

interface propsType {
  productArray: Array<oneProductType>;
}

export default class AllProductsComponent extends Component<{
  productData: propsType;
}> {
  start: number = 10;
  end: number = 20;
  state: { items: Array<oneProductType>; hasMore: boolean } = {
    items: [...this.props.productData.productArray],
    hasMore: true,
  };
  fetchDataFromAPIGradually = async (start: number, end: number) => {
    const res = await fetch(
      `${BASE_PATH_FORAPI}/api/products?start=${start}&end=${end}`
    );
    const data = await res.json();
    if (data.productArray === "Not found!") {
      this.setState({ hasMore: false });
    }
    return data;
  };
  getData = async () => {
    let allData = await this.fetchDataFromAPIGradually(this.start, this.end);
    if(allData.productArray!=="Not found!"){

        this.setState({
          items: this.state.items.concat(allData.productArray),
        });
    }else{
        this.setState({hasMore:false})
    }
    this.start=this.start+10
    this.end=this.end+10
    // console.log(this.props.productData.productArray[0].price);
  };
  render(): ReactNode {
    return (
      
        <InfiniteScroll
          dataLength={this.state.items.length} //This is important field to render the next data
          next={this.getData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p className="text-center">
              <b>Yay! You have seen it all</b>
            </p>
          }
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4"
        >
          {this.state.items.map((item:oneProductType, index:number)=>(
            <Card key={index} singleProductData={item}/>
          ))}
        </InfiniteScroll>
    );
  }
}
