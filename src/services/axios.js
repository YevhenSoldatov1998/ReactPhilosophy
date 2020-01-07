import * as axios from "axios";

export const getData = () => {

    return axios.get('http://localhost:3000/data');
};
export const postData = (obj) => {
    return axios.post('http://localhost:3000/data', {...obj});

}

export const deletePost = (id) => {
    return axios.delete('http://localhost:3000/data/'+ id);
}