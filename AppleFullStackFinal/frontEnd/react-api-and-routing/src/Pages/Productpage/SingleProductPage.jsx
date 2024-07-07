import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";

function SingleProductPage() {
  const [product, setProduct] = useState([]);
  // The isLoading state is used to manage the loading state of the component. It is set to true when the component mounts or when the productID changes, indicating that data is being fetched. It is set to false when the data fetching is complete.
  const [isLoading, setIsLoading] = useState(false);
  const { productID } = useParams();
  


  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:3001/iphone")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products.filter(
                    
          (product) => product.product_url === productID
        );
        setProduct(productList);
      })
      .catch((error) => console.error("Error fetching product:", error))
      .finally(() => setIsLoading(false));

  }, [productID]);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="internal-page-wrapper">
      <div className="container">
        {product.length === 0 ? (
          <Four04 />
        ) : (

          // product?.map: Conditionally renders the product list based on the presence of product data. If product is not null or undefined, it maps over the product data and renders each product; otherwise, it does nothing.
          product?.map((singleProduct, index) => (
            <div key={singleProduct.product_id}>
              <div className="row justify-content-center text-center">
                <div className="col-12 mt-5 pt-5">
                  <div className="title-wrapper font-weight-bold">
                    {singleProduct.product_name}
                  </div>
                  <div className="brief-description">
                    {singleProduct.product_brief_description}
                  </div>
                </div>
              </div>
              <div className="row justify-content-center text-center product-holder h-100 m-5">
                <div className="col-sm-12 col-md-6 my-auto">
                  <div className="product-title">
                    {`at ${singleProduct.starting_price}`}
                  </div>
                  <div className="monthly-price">
                    {singleProduct.price_range}
                  </div>
                  <div className="product-details">
                    {singleProduct.product_description}
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="product-image">
                    <img src={singleProduct.product_img} alt="product" />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default SingleProductPage;
