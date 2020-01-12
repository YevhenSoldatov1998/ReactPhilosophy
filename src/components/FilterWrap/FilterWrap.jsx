import React from 'react'
import FilterHeader from "./FIlterHeader/FilterHeader";
import ProductTable from "./ProductTable/ProductTable";
import ProductTableContainer from "./ProductTable/ProductTableContainer";

class FilterWrap extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }
    componentDidMount() {
        this.props.GET_DATA_CREATOR()
    }

    nameNewProductFunc = body => this.props.NAME_PRODUCT_CREATOR(body);
    nameNewCategoryFunc = body => this.props.NAME_CATEGORY_CREATOR(body);
    newProductPriceFunc = body => this.props.NAME_PRICE_CREATOR(body);
    newProductStockedFunc = () => this.props.NAME_STOCKED_CREATOR();
    addNewProduct = () => this.props.ADD_PRODUCT_CREATOR();
    changeProductSearch = body => this.props.PRODUCT_SEARCH_CREATOR(body);
    toggleOnlyStock = () => this.props.TOGGLE_STOCKED_CREATOR();
    deleteProduct = id => this.props.DELETE_PRODUCT_CREATOR(id);

    render() {
        debugger
        let {data, productSearch, isOnlyStock, newProductName, newProductCategory, newProductPrice, newProductStocked} = this.props.data;
        return (
            <div className={`filterWrap`}>
                {this.props.data.data?'ura':'error'}
                {data ?
                    <>
                        <FilterHeader
                            newProductName={newProductName}
                            productSearch={productSearch}
                            newProductCategory={newProductCategory}
                            newProductPrice={newProductPrice}
                            isOnlyStock={isOnlyStock}
                            newProductStocked={newProductStocked}
                            addNewProduct={this.addNewProduct}
                            nameNewProductFunc={this.nameNewProductFunc}
                            nameNewCategoryFunc={this.nameNewCategoryFunc}
                            newProductPriceFunc={this.newProductPriceFunc}
                            newProductStockedFunc={this.newProductStockedFunc}
                            toggleOnlyStock={this.toggleOnlyStock}
                            changeProductSearch={this.changeProductSearch}
                        />
                        <ProductTableContainer deleteProduct={this.deleteProduct}
                                               productSearch={this.state.productSearch}
                                               data={data.filter(item => isOnlyStock ? item.stocked : item)}
                        />
                    </> :
                    false

                }

            </div>
        )
    }
}

export default FilterWrap