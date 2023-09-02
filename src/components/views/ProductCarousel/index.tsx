"use client";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndTypes";
import { ReactNode, Component, FC } from "react";
import Card from "../Card";


// const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({ ProductData }) => {

//   return (
//     <div className="flex">
//       {ProductData.map((item: oneProductType, index: number) => (
//         <Card key={index} singleProductData={item} />
//       ))}
//     </div>
//   );
// };

// export default ProductCarousel;

// export default class ProductCarousel extends Component<{ ProductData: Array<oneProductType>}>{

//   render(): ReactNode {
//     const settings = {

//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1,

//       responsive: [
//         {
//           breakpoint: 824,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,

//           }
//         },
//       ]
//     };
//     return(

//         <Slider {...settings}>
//         {this.props.ProductData.map((item: oneProductType, index: number) => (
//         <Card key={index} singleProductData={item} />
//       ))}
//         </Slider>
//     )

//   }
// }

const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({
  ProductData,
}) => {
  let initialX: number;
  let isDragging = false;
  let tabBox: any;

  const isBrowser = () => typeof window !== "undefined";

  if (isBrowser()) {
    tabBox = document.querySelector(".scrollGrab");
  }

  // Desktop functions
  function mouseMoves(e: any) {
    if (!isDragging) return;
    if (tabBox) {
      tabBox.scrollLeft -= e.movementX;
    }
  }
  function mouseDown() {
    console.log("moving orignal");
    isDragging = true;
  }
  function mouseUp() {
    isDragging = false;
  }

  // mobile functions
  function mouseMovesForMobile(e: any) {
    if (!isDragging) return;
    if (tabBox) {
      var currentX = e.touches[0].clientX;
      var movementX = currentX - initialX;
      tabBox.scrollLeft -= movementX / 5;
    }
  }
  function mouseDownForMobile(e: any) {
    isDragging = true;
    initialX = e.touches[0].clientX;
  }
  let dataToIterate = ProductData.slice(0, 15);

  return (
    <div className="py-16">
    <div className="text-center space-y-3">
        <p className="text-promotionColor text-sm">PRODUCTS</p>

        <h3 className="text-primaryText text-3xl font-bold">
        Check What We Have
        </h3>
      </div>
    <div
      onMouseMove={mouseMoves}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      className="select-none flex overflow-x-hidden overflow-y-hidden py-4 scrollGrab"
      onTouchMove={mouseMovesForMobile}
      onTouchStart={mouseDownForMobile}
      onTouchEnd={mouseUp}
    >
      {dataToIterate.map((item: oneProductType, index: number) => (
        <Card key={index + 4} singleProductData={item} />
      ))}
    </div>
    </div>
  );
};

export default ProductCarousel;
