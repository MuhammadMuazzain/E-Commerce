import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';



const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); // To find product in all products data

  const product = all_product.find((e) => e.id === Number(productId)); // converting productId from string to numer

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product

