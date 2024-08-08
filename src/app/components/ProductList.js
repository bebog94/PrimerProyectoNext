import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({data, category}) => {
    return (
        <div className='flex flex-wrap justify-center items-center'>
            {
                data.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        category={product.category}
                    />
                ))
            }
        </div>
    )
}

export default ProductList