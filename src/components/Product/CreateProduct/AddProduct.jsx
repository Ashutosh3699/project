import React from 'react'
import RenderSteps from './Rendersteps/RenderSteps'

const AddProduct = () => {

   

  return (
    <div className="flex w-full items-start gap-x-6">
    <div className="flex flex-1 flex-col">
        <h1 className="mb-14 text-3xl font-medium text-gray-50">Add Product</h1>
        <div className="flex-1">
            <RenderSteps />
        </div>
    </div>

   <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-gray-700 bg-gray-800 p-6 xl:block">
    <p className="mb-8 text-lg text-gray-50">⚡ Product Upload Tips</p>
    <ul className="ml-5 list-item list-disc space-y-4 text-xs text-gray-50">
        <li>Set the Product Price option or make it free.</li>
        <li>Standard size for the product thumbnail is 1024x576.</li>
        <li>Video section controls the product overview video.</li>
        <li>Product Builder is where you create & organize a product.</li>
        <li>
        Add Topics in the Product Builder images to view products,
        zoom products, and get detailing.
        </li>
        <li>
        Information from the Additional image section shows up on the
        product single page.
        </li>
        <li>Make Announcements to notify any important</li>
    </ul>
    </div>
</div>
  )
}

export default AddProduct