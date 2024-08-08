'use client';

import React, { useState }  from 'react'

const Counter = () => {
    const [value, setValue] = useState(0);

    const increment =()=>{
        setValue(value + 1);
    }
    
    const decrease =()=>{
        if (value===0) {
            return;
        }
        setValue(value - 1);
    }

  return (
    <div className='flex gap-10'>
       <button onClick={decrease}>-</button>
       <div>{value}</div>
       <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter