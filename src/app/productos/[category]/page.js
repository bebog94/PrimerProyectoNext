import ProductList from '@/app/components/ProductList';
import React from 'react';

const getProducts = async (category) => {
    const data = await fetch(`/api/products/${category}`);
    const products = await data.json();
    return products;
}

const Products = async ({ params }) => {
    const { category } = params;
    const products = await getProducts(category);

    return (
        <>
            <h1>Esta página es por el tipo: {category}</h1>
            <ProductList category={category} products={products} />
        </>
    );
}

export default Products;
