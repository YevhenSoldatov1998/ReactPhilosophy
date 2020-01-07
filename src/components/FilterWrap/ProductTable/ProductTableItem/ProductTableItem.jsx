import React from 'react';
const ProductTableItem = (props) => {

    return (
        <div className={props.item.stocked ? `product-item stocked` : `product-item `}>
            <span>{props.item.name}</span> <span>{props.item.price}</span>
            <span onClick={()=> props.deleteProduct(props.item.id) } className={`deleteItem`}>&times;</span>
        </div>
    )
}
export default ProductTableItem