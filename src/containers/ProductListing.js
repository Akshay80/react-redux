import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
    const dispatch = useDispatch();

  const getProducts = async() => {
    await axios.get('https://fakestoreapi.com/products').then((response) => {
        dispatch(setProducts(response.data))
    })
    .catch((error) => {
        console.log(error);
    })
  }

  useEffect(() => {
    getProducts();
  },[])

    return (
    <div>
        <ProductComponent />
    </div>
  )
}

export default ProductListing