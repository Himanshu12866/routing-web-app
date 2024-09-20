import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {

    const params = useParams()

    useEffect(()=>{
        console.log(params.category)
    },[params.category])

  return (
    <div>Products</div>
  )
}

export default Products