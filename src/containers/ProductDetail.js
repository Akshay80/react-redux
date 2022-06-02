import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeSelectedProducts } from "../redux/actions/productActions";
import ReactStars from "react-stars";
import loader from "../assets/loader.gif";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { id, title, image, description, rating, price, category } = product;
  const dispatch = useDispatch();
  const { productId } = useParams();
  const getProductsById = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        dispatch(selectedProducts(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(Object.keys)
if(product === {})
{
  console.log("hello world IF");
}
else
{
  console.log("ELSE");
}

  useEffect(() => {
    getProductsById();
    return () => {
      dispatch(removeSelectedProducts())
    }
  }, []);

  return (
    <div className="container">
    <div className="row">
    {Object.keys(product).length === 0 ? 
      (<div className="text-center mt-5">
      <img className="mt-5" src={loader} alt="loader" width={80}/>
      </div>): 
   
    <div
      className="card mt-3 mb-3 p-4 shadow p-3 mb-5 bg-body rounded"
      style={{ flexDirection: "row", alignItems: "center" }}
      key={id}
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
            <br />
            <br />
            <button type="button" className="btn btn-danger border-0 shadow-none outline-0 fw-bold">🛒 Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
   }
     </div>
  </div>
  );
};

export default ProductDetail;
