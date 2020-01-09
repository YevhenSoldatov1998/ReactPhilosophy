import React from 'react'
import FilterHeader from "./FIlterHeader/FilterHeader";
import ProductTable from "./ProductTable/ProductTable";
import {deleteDataItem, getData, postData} from "../../services/axios"
import * as axios from "axios";

class FilterWrap extends React.Component {
    componentDidMount() {

        getData(this.state.showPage, this.state.limit).then(response => {
            axios.get('http://localhost:3000/data').then(res => this.setState({totalItem: res.data.length}))
            this.getDataFromAPI(response.data)
        })
    }

    state = {
        newProductName: '',
        newProductCategory: '',
        newProductPrice: '',
        newProductStocked: false,
        productSearch: '',
        isOnlyStock: false,
        data: null,
        totalItem: 10,
        limit: 3,
        showPage: 1
    };

    nameNewProductFunc = body => this.setState({newProductName: body});
    nameNewCategoryFunc = body => this.setState({newProductCategory: body});
    newProductPriceFunc = body => this.setState({newProductPrice: body});
    newProductStockedFunc = () => this.setState({newProductStocked: !this.state.newProductStocked});
    addNewProduct = () => {
        const {newProductName, newProductCategory, newProductPrice, newProductStocked} = this.state;

        let lastId = this.state.data[this.state.data.length - 1].id + 1;

        let newProductNameToUpper = newProductName.substr(0, 1).toUpperCase() + newProductName.substr(1, newProductName.length - 1)
        let obj = {
            id: lastId,
            name: newProductNameToUpper,
            category: newProductCategory.toLocaleUpperCase(),
            price: newProductPrice + '$',
            stocked: newProductStocked,
        };
        if (newProductName && newProductCategory && newProductPrice) {
            postData(obj).then(res => {
                this.setState({
                    data: [...this.state.data, res.data],
                    newProductName: '',
                    newProductCategory: '',
                    newProductPrice: '',
                })
            });

        } else {
            alert("Введите все поля")
        }

    };
    changeProductSearch = body => this.setState({productSearch: body});
    toggleOnlyStock = () => this.setState({isOnlyStock: !this.state.isOnlyStock});
    getDataFromAPI = data => this.setState({data});
    deleteItems = (itemId) => {
        deleteDataItem(itemId)
            .then(response => {
                getData(this.state.showPage, this.state.limit).then(res => {
                    debugger
                    this.setState({data: res.data})

                })
            })
    }
    setCurrentPage = (page) =>{
        this.setState({
            showPage: page
        })
        getData(this.state.showPage, this.state.limit).then(response => {
            this.getDataFromAPI(response.data)
        })
    }

    render() {
        let {data, productSearch, isOnlyStock, newProductName, newProductCategory, newProductPrice, newProductStocked} = this.state;

        let allPages = Math.ceil(this.state.totalItem / this.state.limit);
        let arrPages = []
        for (let i = 1; i <= allPages; i++) {
            arrPages.push(i)
        }

        return (
            <div className={`filterWrap`}>
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
                        <ProductTable deleteItems={this.deleteItems}
                                      data={data.filter(item => isOnlyStock ? item.stocked : item)}
                        />
                        <div className="pagination">
                            {arrPages.map(i => {
                               return <span className={this.state.showPage === i?'active': ''} onClick={()=> this.setCurrentPage(i)}>{i}</span>
                            })}
                        </div>

                    </> :
                    false

                }

            </div>
        )
    }
}

export default FilterWrap