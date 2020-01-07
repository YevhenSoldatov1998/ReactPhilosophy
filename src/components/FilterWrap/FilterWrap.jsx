import React from 'react'
import FilterHeader from "./FIlterHeader/FilterHeader";
import ProductTable from "./ProductTable/ProductTable";
import {deletePost, getData, postData} from "../../services/axios"

class FilterWrap extends React.Component {
    componentDidMount() {
        getData().then(response => {
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
    };

    nameNewProductFunc = body => this.setState({newProductName: body});
    nameNewCategoryFunc = body => this.setState({newProductCategory: body});
    newProductPriceFunc = body =>  this.setState({newProductPrice: body });
    newProductStockedFunc = () => this.setState({newProductStocked: !this.state.newProductStocked});
    addNewProduct = () => {
        const {newProductName, newProductCategory, newProductPrice, newProductStocked} = this.state;
        let lastId = this.state.data[this.state.data.length - 1].id + 1;
        let newProductNameToUpper =  newProductName.substr(0,1).toUpperCase() + newProductName.substr(1,newProductName.length -1 ).toLowerCase();

        let obj = {
            id: lastId,
            name: newProductNameToUpper,
            category: newProductCategory.toLocaleUpperCase(),
            price: newProductPrice + '$',
            stocked: newProductStocked,
        };
        if(newProductName && newProductCategory && newProductPrice){
            postData(obj).then(res => {
                this.setState({
                    data: [...this.state.data, res.data],
                    newProductName: '',
                    newProductCategory: '',
                    newProductPrice: '',
                })
            });

        }
        else{
            alert("Введите все поля")
        }

    };
    changeProductSearch = body => this.setState({productSearch: body});
    toggleOnlyStock = () => this.setState({isOnlyStock: !this.state.isOnlyStock});
    getDataFromAPI = data => this.setState({data});
    deleteProduct = (item) =>{
        deletePost(item).then(res=>{
            debugger
        })
    }

    render() {
        let {data, productSearch, isOnlyStock, newProductName ,  newProductCategory,  newProductPrice, newProductStocked} = this.state;
        return (
            <div className={`filterWrap`}>
                {data ?
                    <>
                        <FilterHeader
                            newProductName={newProductName}
                            productSearch ={productSearch}
                            newProductCategory={newProductCategory}
                            newProductPrice={newProductPrice}
                            isOnlyStock = {isOnlyStock}
                            newProductStocked={newProductStocked}
                            addNewProduct = {this.addNewProduct}
                            nameNewProductFunc={this.nameNewProductFunc}
                            nameNewCategoryFunc={this.nameNewCategoryFunc}
                            newProductPriceFunc={this.newProductPriceFunc}
                            newProductStockedFunc={this.newProductStockedFunc}
                            toggleOnlyStock ={this.toggleOnlyStock}
                            changeProductSearch ={this.changeProductSearch}
                        />
                        <ProductTable deleteProduct={this.deleteProduct}
                                      data={data.filter(item => isOnlyStock?item.stocked:item) }
                        />
                    </> :
                    false

                }

            </div>
        )
    }
}

export default FilterWrap