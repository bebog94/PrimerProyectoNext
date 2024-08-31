import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
  
    return (
        <div className='flex flex-wrap justify-center items-center'>
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    category={product.category}
                />
            ))}
        </div>
    );
}

export default ProductList;
