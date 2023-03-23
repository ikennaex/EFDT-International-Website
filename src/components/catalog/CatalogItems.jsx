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


// {items.map(item => {
//     return (
//     <div className='catalog-div' key={item.id}>
//         <h1>{item.desc}</h1>
//         <img src= {item.img}></img>
//     </div>
//     )
// })}