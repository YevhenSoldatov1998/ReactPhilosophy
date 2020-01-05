import React from 'react'

const FilterHeader = (props) => {
    const handleChange = (e) => {
        let body = e.target.value;
        props.changeProductSearch(body);
    };
    const call_toggleOnlyStock = () => {
        props.toggleOnlyStock()
    }
    return (
        <div className={`filterHeader`}>
            <input className={`productSearch`}
                   placeholder={`Input product name`}
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