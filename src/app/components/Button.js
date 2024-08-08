import React from 'react';

const Button = ({children, handleClick}) => {

  return (
    <button onClick={handleClick} className={'py-2 px-4 bg-blue-600 hover:border-blue-600 hover:text-blue-600 border-2 font-bold rounded-lg text-white text-sm hover:bg-white'}>{children}</button>
  )
}; export default Button;