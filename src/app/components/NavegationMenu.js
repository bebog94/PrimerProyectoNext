import React from 'react'
import mockData from '../../../data/mockData'

function getCategories(data) {
    const categories= data
    
}

const NavegationMenu = () => {

    const categories = mockData.map(category => category.category)
    console.log({categories});
  return (
    <div className='bg-cian-800 p-4'>
        <ul className='flex space-x-4 justify-center'>

        </ul>
    </div>
  )
}

export default NavegationMenu