import React from 'react'

const ProductCard = ({item}) => {

  
    
  return (
    <div className="product-card">
      <img className="child" width={300} src={item?.img}/>
      <div>{item?.choice === true ? "Conscius choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard
