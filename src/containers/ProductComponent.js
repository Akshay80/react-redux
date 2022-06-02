import React from "react";
import { useSelector } from "react-redux";
import "../containers/styles/productComponent.css";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, description, price, category, image, rating } = product;
    return (
        <Link to={`/product/${id}`}>
        <div
          className="card mt-3 mb-3 p-4 shadow p-3 mb-5 bg-body rounded"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <div className="imageClass">
            <img className="newCard" src={image} alt="product_image" />
          </div>
          <div className="card-body">
            <div className="d-flex">
              <div className="col-lg-9 col-md-9 ps-4">
                <h6 className="card-title">{title}</h6>

                <p
                  className="text-capitalize"
                  style={{ fontSize: 14, color: "gray" }}
                >
                  {category}
                </p>

                <p className="card-text" style={{ fontSize: 15 }}>
                  {description}
                </p>
              </div>

              <div
                className="col-lg-3 col-md-3"
                style={{ alignSelf: "baseline", textAlign: "end" }}
              >
                <h3 className="font-weight-semibold mb-0">${price}</h3>
                <p className="d-flex justify-content-end mb-0">
                  <ReactStars
                    count={rating.rate}
                    edit={false}
                    color1={"#FF0000"}
                    size={24}
                  />
                </p>
                <small className="text-muted">{rating.count} reviews</small>
              </div>
            </div>
          </div>
        </div>
        </Link>
    );
  });

  return (
    <div>
      <div className="container d-flex justify-content-center mt-50 mb-50">
        <div className="row">{renderList}</div>
      </div>
    </div>
  );
};

export default ProductComponent;
