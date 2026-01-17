'use client'
import React from 'react'

const ProductByIdError = ({error}) => {
  return (
    <div>
      {error.message}
    </div>
  )
}

export default ProductByIdError
