import React from 'react'

export const CollectionItem = ({id, imageUrl, name, price}) => {
    return (
        <div key={id} className='preview-body'> 
            <div className='preview-img'>
                <img src={imageUrl} alt=''/>

                <div className='middle'>
                    <div className='text'>
                        ADD TO CART
                    </div>
                </div>
            </div>
                        

            <div className='description'>
                <div> {name} </div>
                <div> ${price} </div>                           
            </div>
        </div>
    )
}
