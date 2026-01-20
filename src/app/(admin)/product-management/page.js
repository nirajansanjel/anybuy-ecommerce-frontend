import React from 'react'
import ProductsTable from './_components/Table'
import { getProducts } from '@/api/products';

const ProductManagement =async () => {
  const response = await getProducts();
  const products = response?.data ??[]
  return (
    
    <section className=" dark:bg-gray-800 py-3 sm:py-5">
       <h2 className="font-semibold text-xl text-gray-700 mb-2  m-4 dark:text-white">Product Management</h2>
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-12"></div>
       <ProductsTable  products ={products}/>
    </section>
  )
}

export default ProductManagement
