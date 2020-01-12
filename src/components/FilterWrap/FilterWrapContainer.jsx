import FilterWrap from "./FilterWrap";
import {connect} from "react-redux";
import {
    GET_DATA_CREATOR,
    NAME_CATEGORY_CREATOR,
    NAME_PRICE_CREATOR,
    NAME_PRODUCT_CREATOR,
    NAME_STOCKED_CREATOR,
    ADD_PRODUCT_CREATOR,
    PRODUCT_SEARCH_CREATOR,
    TOGGLE_STOCKED_CREATOR,
    DELETE_PRODUCT_CREATOR
} from "../../redux/dataReducer";

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

export const FilterWrapContainer = connect(mapStateToProps ,{
    GET_DATA_CREATOR,
    NAME_PRODUCT_CREATOR,
    NAME_CATEGORY_CREATOR,
    NAME_PRICE_CREATOR,
    NAME_STOCKED_CREATOR,
    ADD_PRODUCT_CREATOR,
    PRODUCT_SEARCH_CREATOR,
    TOGGLE_STOCKED_CREATOR,
    DELETE_PRODUCT_CREATOR

})(FilterWrap);