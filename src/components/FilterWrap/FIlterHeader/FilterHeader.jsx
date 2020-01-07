import React from 'react'

const FilterHeader = (props) => {
    const handleChange = (e) => {
        let body = e.target.value;
        props.changeProductSearch(body);
    };
    const call_toggleOnlyStock = () => {
        props.toggleOnlyStock()
    }
    const call_nameNewProductFunc = (e) => {
        let body = e.target.value;
        props.nameNewProductFunc(body)
    }
    const call_nameNewCategoryFunc = (e) => {
        let body  =  e.target.value;
        props.nameNewCategoryFunc(body)
    }
    const call_newProductPriceFunc = (e) => {
        debugger
        let body = e.target.value;
        props.newProductPriceFunc(body)
    }
    const call_newProductStockedFunc = () => {
        props.newProductStockedFunc()
    }
    const handleAdd = () => {
        props.addNewProduct()
    }
    return (
        <div className={`filterHeader`}>
            <input className={`productSearch`}
                   placeholder={`product name`}
                   type="text"
                   onChange={call_nameNewProductFunc}
                   value={props.newProductName}
            />
            <input className={`productSearch`}
                   placeholder={`product category`}
                   type="text"
                   onChange={call_nameNewCategoryFunc}
                   value={props.newProductCategory}
            />
            <input className={`productSearch`}
                   placeholder={`product price`}
                   type="number"
                   onChange={call_newProductPriceFunc}
                   value={props.newProductPrice}
            />
            <label htmlFor="newProductStocked">Product Stocked</label>
            <input type="checkbox"
                   id="newProductStocked"
                   onChange={call_newProductStockedFunc}
                   value={props.newProductStocked}
            />
            <button onClick={handleAdd}>Add</button>

            <input className={`productSearch`}
                   placeholder={`Search product`}
                   type="text"
                   onChange={handleChange}
                   value={props.productSearch}
            />

            <div className="checkbox">
                <label htmlFor="stock">
                    Show product only stock
                </label>
                <input type="checkbox" id={`stock`}
                       onChange={call_toggleOnlyStock}
                       checked={props.isOnlyStock}
                />
            </div>
        </div>
    )
}
export default FilterHeader