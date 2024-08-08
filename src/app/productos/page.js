import React from 'react'
import Button from '../components/Button'
import ProductList from '../components/ProductList'
import mockData from '../../../data/mockData'

const productos = () => {
  return (
    <>
    <h1>productos:</h1>
    <ProductList category={'all'} data={mockData}/>
    </>
  )
}

export default productos