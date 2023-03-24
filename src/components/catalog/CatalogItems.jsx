import React from 'react'

const CatalogItems = ({desc, img}) => {
    return (
    <div className='catalog-data'>
        <div>
        <img src= {img}></img>
        <h1>{desc}</h1>
        </div>
     </div>
  )
}

export default CatalogItems

