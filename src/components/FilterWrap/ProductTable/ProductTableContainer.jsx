import React from 'react'
import ProductTable from "./ProductTable";
const ProductTableContainer = (props) =>{
    return(
        <ProductTable deleteProduct={props.deleteProduct}
                      data={props.data.filter(item => item.name.toLowerCase().includes(props.productSearch.toLowerCase()))}
        />
    )
}
export default ProductTableContainer