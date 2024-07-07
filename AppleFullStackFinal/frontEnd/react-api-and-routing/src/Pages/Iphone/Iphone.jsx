import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  // State to store the products retrieved from the backend
  const [products, setProducts] = useState([]);

  // useEffect hook to fetch data from the backend when the component mounts
  useEffect(() => {
    // Fetching data from the backend API
    fetch("http://localhost:3001/iphone")
      .then((res) => {
        // console.log("Response received from backend:", res);
        return res.json();
      })
      .then((data) => {
        //  data received from the backend
        console.log("Data received from backend:", data);
        // Setting the retrieved products array into the state
        setProducts(data.products);
        // console.log(data.products);
      })
      .catch((error) => {
        //  error message if fetching data fails
        console.error("Error fetching data:", error);
      });
  }, []);
  // console.log("Products:", products);

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              {/* Title and brief description */}
              <div className="title-wraper font-weight-bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {/* Mapping over the products array to render each product */}
          {/* By adding ?. after products, to ensure that the map function is only called if products is not null or undefined. This helps prevent errors if products is not yet populated when the component initially renders or component being mounted(React has inserted the component into the DOM for the first time.). */}
          {products?.map((product, index) => {
            console.log("Product:", product);
            // The 'product' parameter represents each individual product 
            return (
              <div
                key={product.product_url}
                className={`row justify-content-center text-center product-holder h-100`}
              >
                <div
                  className={`col-sm-12 col-md-6 my-auto order-${
                    index % 2 === 0 ? 1 : 2
                  }`}
                >
                  {/* Product title, brief description, starting price, and price range */}
                  <div className="product-title">{product.product_name}</div>
                  <div className="product-brief">
                    {product.product_brief_description}
                  </div>
                  <div className="starting-price">
                    {`Starting at ${product.starting_price}`}
                  </div>
                  <div className="monthly-price">{product.price_range}</div>
                  <div className="links-wrapper">
                    {/* Link to individual product page */}
                    <ul>
                      <li>
                        <Link to={product.product_url}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                  {/* Object properties  */}
                  {/* {console.log("Product:", product)}
                  {console.log("Product ID:", product.product_id)}
                  {console.log("Product URL:", product.product_url)}
                  {console.log("Product Name:", product.product_name)}
                  {console.log("Description ID:", product.description_id)}
                  {console.log(
                    "Product Brief Description:",
                    product.product_brief_description
                  )}
                  {console.log(
                    "Product Description:",
                    product.product_description
                  )}
                  {console.log("Product Image:", product.product_img)}
                  {console.log("Product Link:", product.product_link)}
                  {console.log("Price ID:", product.price_id)}
                  {console.log("Starting Price:", product.starting_price)}
                  {console.log("Price Range:", product.price_range)} */}
                </div>

                <div
                  className={`col-sm-12 col-md-6 order-${
                    index % 2 === 0 ? 2 : 1
                    // This logic is used to determine the order of the columns for each product displayed on the page. 
                  }`}
                >
                  
                  <div className="product-image">
                    <img src={product.product_img} alt="product" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
