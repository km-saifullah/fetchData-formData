import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/products/productSlice";
import "./products.css";

const Products = () => {
  const dispatch = useDispatch();
  const { isLoading, error, products } = useSelector((state) => state.products);

  // load api data
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <section className="show_data">
      <div className="container">
        <div className="products_wrapper">
          {products.map((product, index) => {
            return (
              <div className="products" key={index}>
                <div className="product_img">
                  <img src={product.image} alt="" />
                </div>
                <div className="product_info">
                  <h3>{product.phoneName}</h3>
                  <p>Releases: {product.releaseDate}</p>
                  <p>Company: {product.company}</p>
                  <p>
                    Price: <span className="price">{product.price}</span> BDT
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
