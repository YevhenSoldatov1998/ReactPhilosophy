import * as axios from "axios";

export const getData = (page, limit) => {
    return axios.get(`http://localhost:3000/data?_page=${page}&_limit=${limit}`);
};
export const postData = (obj) => {
    return axios.post('http://localhost:3000/data', {...obj});
}
export const deleteDataItem = (itemId) =>{
    return axios.delete('http://localhost:3000/data/' + itemId);
}