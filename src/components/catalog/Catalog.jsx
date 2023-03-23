import React, { useState } from 'react'
import CatalogItems from './CatalogItems'
import "./catalog.css"

const Catalog = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1613897807164-01263a2296e2?ixlib",
            desc: "Charcoal"
        },

        {
            id: 2,
            img: "https://images.unsplash.com/photo-1589707790848-9097c28e8569?ixlib",
            desc: "Ginger"
        },
        
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1613548058193-1cd24c1bebcf?ixlib",
            desc: "Honey"
        },
        
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1634250533599-f8a70960073c?ixlib",
            desc: "Benny seed"
        }
    ]);

  return (
    <div className='catalog-section' id='catalog'>
        <h2 className='catalog-text'>Catalog</h2>
        <div className='catalog-parent-div'>

            {items.map((item) => {
                return (
                    <CatalogItems
                    key={item.id}
                    img = {item.img}
                    desc = {item.desc}
                    />
                )
            })}
            
        </div>

        <div className='more-products-catalog'><p>View more products</p></div>
    </div>
  )
}

export default Catalog