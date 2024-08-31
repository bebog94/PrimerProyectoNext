'use client';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import ProductList from '../components/ProductList';
import Header from '../components/Header';

const getProducts = async (category) => {
    const data = await fetch(`/api/products/${category}`);
    const products = await data.json();
    return products;
}

const Productos = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const allProducts = await getProducts('all');
            setProducts(allProducts);
        }
        fetchProducts();
    }, []);

    return (
        <>
            <Header />
            <h1>Productos:</h1>
            <ProductList category={'all'} products={products} />
        </>
    );
}

export default Productos;
