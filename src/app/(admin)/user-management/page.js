import React from 'react'
import UsersTable from './_components/UsersTable'

const page = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl text-gray-700 mb-2  m-4 dark:text-white">User management page </h2>
     <UsersTable/>
      
    </div>
  )
}

export default page
