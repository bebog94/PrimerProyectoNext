'use client';
import React from 'react'
import Button from '../components/Button'
import ProductList from '../components/ProductList'
import mockData from '../../../data/mockData'
import Header from '../components/Header';

const productos = () => {
  return (
    <>
     <Header/>
    <h1>productos:</h1>
    <ProductList category={'all'} data={mockData}/>
    </>
  )
}

export default productos