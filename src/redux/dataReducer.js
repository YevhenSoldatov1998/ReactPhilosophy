import {deletePost, getData, postData} from "../services/axios";

const GET_DATA_API = 'GET_DATA_API';
const NAME_PRODUCT = 'NAME_PRODUCT';
const NAME_CATEGORY = 'NAME_CATEGORY';
const NAME_PRICE = 'NAME_PRICE';
const NAME_STOCKED = 'NAME_STOCKED';
const ADD_PRODUCT = 'ADD_PRODUCT';
const PRODUCT_SEARCH = 'PRODUCT_SEARCH';
const TOGGLE_STOCKED = 'TOGGLE_STOCKED';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const GET_DATA_CREATOR = () => ({type: GET_DATA_API});
export const NAME_PRODUCT_CREATOR = body => ({type: NAME_PRODUCT, body});
export const NAME_CATEGORY_CREATOR = body => ({type: NAME_CATEGORY, body});
export const NAME_PRICE_CREATOR = body => ({type: NAME_PRICE, body});
export const NAME_STOCKED_CREATOR = body => ({type: NAME_STOCKED, body});
export const ADD_PRODUCT_CREATOR = () => ({type: ADD_PRODUCT});
export const PRODUCT_SEARCH_CREATOR = body => ({type: PRODUCT_SEARCH, body});
export const TOGGLE_STOCKED_CREATOR = () => ({type: TOGGLE_STOCKED});
export const DELETE_PRODUCT_CREATOR = id => ({type: DELETE_PRODUCT, id});


let initialState = {
    newProductName: '1',
    newProductCategory: '1',
    newProductPrice: '1',
    newProductStocked: false,
    productSearch: '',
    isOnlyStock: false,
    data: null,
}
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_API:
            getData().then(response => {
                debugger
                    return {
                        ...state,
                        data: response.data
                    }
                });

        case NAME_PRODUCT:
            return {...state, newProductName: action.body};
        case  NAME_CATEGORY:
            return {...state, newProductCategory: action.body};
        case NAME_PRICE:
            return {...state, newProductPrice: action.body};
        case NAME_STOCKED:
            return {...state, newProductStocked: action.type};
        case ADD_PRODUCT:

            const {newProductName, newProductCategory, newProductPrice, newProductStocked} = state;
            let lastId;
            if (!state.data.id) {
                lastId = 0;
            } else {
                lastId = this.data[this.state.data.length - 1].id + 1;
            }
            let newProductNameToUpper = newProductName.substr(0, 1).toUpperCase() + newProductName.substr(1, newProductName.length - 1).toLowerCase();
            let obj = {
                id: lastId,
                name: newProductNameToUpper,
                category: newProductCategory.toLocaleUpperCase(),
                price: newProductPrice + '$',
                stocked: newProductStocked,
            };
            if (newProductName && newProductCategory && newProductPrice) {
                postData(obj)
                    .then(res => {
                        debugger
                        return {
                            ...state,
                            data: [...state.data, res.data],
                            newProductName: '',
                            newProductCategory: '',
                            newProductPrice: '',
                        }
                    })


            } else {
                alert("Введите все поля")
            }
        case PRODUCT_SEARCH:
            return {...state, productSearch: action.body};
        case TOGGLE_STOCKED:
            return {...state, isOnlyStock: !state.isOnlyStock};
        case DELETE_PRODUCT:
            deletePost(action.id)
                .then(res => {
                    getData().then(res => {
                        return {
                            ...state,
                            data: [...res.data]
                        }
                    })
                })
        default:
            return state
    }
}
export default dataReducer
