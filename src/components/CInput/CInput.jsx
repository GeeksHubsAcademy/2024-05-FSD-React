import React from 'react'

export const CInput = ( 
  { 
    type = 'text',
    name = "",
    placeholder = "",
    emitFunction,
    emitOnClickButton,
    value
  } 
) => {
  return (
    <>
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        onChange={emitFunction}
        onClick={emitOnClickButton}
        value={value}
      />    
    </>
  )
}