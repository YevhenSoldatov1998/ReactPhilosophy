import React from 'react'
import ProductTableItem from "./ProductTableItem/ProductTableItem";
import ProductTableCategory from "./ProductTableCategory/ProductTableCategory";
import ProductTableTitle from "./ProductTableTitle/ProductTableTitle";

const ProductTable = (props) => {
    let lastCategory = null;
    const checkCategoryOnRepeat = (category) => {
        if (lastCategory !== category) {
            lastCategory = category;
            return <ProductTableCategory category={category}/>
        } else return false
    };

    return (
        <div>
            <ProductTableTitle/>
            {props.data && props.data.map(item => {
                return (
                    <div key={item.id} className="product">
                        {checkCategoryOnRepeat(item.category)}
                        <ProductTableItem item={item}/>
                    </div>
                )
            })
            }
        </div>
    )
}
export default ProductTable