import React from 'react'
import { AddCategory } from './AddCategory'
import UpdateCategory from './UpdateCategory'

const CategorySection = () => {
  return (
    <div className='py-4 text-gray-50 '>

        <div className='flex flex-col gap-3 py-4 '>
            <h1 className='text-3xl font-semibold text-gray-200 '>Category Section</h1>
            <p className='text-sm font-serif italic'>Technology is best when it brings people together.</p>

        </div>
        
        <div className='flex flex-col gap-6 pl-8 '>
            <AddCategory/>
            <UpdateCategory/>
            {/* delete tag  */}
        </div>
    
    </div>
  )
}

export default CategorySection