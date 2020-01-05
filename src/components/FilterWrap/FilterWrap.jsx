import React from 'react'
import FilterHeader from "./FIlterHeader/FilterHeader";
import ProductTable from "./ProductTable/ProductTable"
import * as axios from 'axios'

class FilterWrap extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/data')
            .then(response => {
                this.getDataFromAPI(response.data)
            })
    }

    state = {
        productSearch: '',
        isOnlyStock: false,
        data: null
    };
    changeProductSearch = (body) => {
        this.setState({
            productSearch: body
        });
    };
    toggleOnlyStock = () => {
        this.setState({
            isOnlyStock: !this.state.isOnlyStock
        });
    };
    getDataFromAPI = (data) => {
        this.setState({
            data
        })
    }


    render() {
        let {productSearch, isOnlyStock} = this.state;
        return (
            <div className={`filterWrap`}>
                <FilterHeader changeProductSearch={this.changeProductSearch}
                              toggleOnlyStock={this.toggleOnlyStock}
                              isOnlyStock={isOnlyStock}
                              productSearch={productSearch}/>
                <ProductTable data={this.state.data && this.state.data.filter(el => {
                        if(isOnlyStock)
                            return el.stocked;
                        else if(productSearch){
                            return el.name.toLowerCase().includes(productSearch.toLocaleLowerCase())
                        }
                        else return 1
                }
                  )}/>

            </div>
        )
    }
}

export default FilterWrap