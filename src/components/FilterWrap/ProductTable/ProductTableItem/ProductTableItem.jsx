import React from 'react';
const ProductTableItem = (props) => {
    return (
        <div className={props.item.stocked ? `product-item stocked` : `product-item `}>
            <span>{props.item.name}</span> <span>{props.item.price}</span>
            <strong onClick={()=>props.deleteItems(props.item.id)}>&times;</strong>
        </div>
    )
}
export default ProductTableItem