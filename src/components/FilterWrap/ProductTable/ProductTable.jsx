import React from 'react'

const ProductTable = (props) => {

    return (
        <div>
            <span>Name</span>
            <span>Price</span>

            {    props.data &&
                props.data.map(el => {
                    return (
                        <div className="product">
                            <div className={`product-category`}>{el.category}</div>
                            <div className={el.stocked?`product-item stocked`: `product-item `}>
                                <span>{el.name}</span> <span>{el.price}</span>
                            </div>

                        </div>

                    )
                })
            }
        </div>
    )
}
export default ProductTable