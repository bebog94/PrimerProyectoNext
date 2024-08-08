'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import mockData from '../../../../data/mockData';
import ProductList from '@/app/components/ProductList';

const Category = () => {
    const { category } = useParams();
    const filterData = category === 'all'
     ? mockData 
     : mockData.filter((item) => item.category.toLocaleLowerCase() === category.toLocaleLowerCase()
    );
    return (
        <>
        <h1>{category}</h1>
        <ProductList category={category} data={filterData} />
        </>
    )
}

export default Category