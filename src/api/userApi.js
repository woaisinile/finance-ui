import axios from '../utils/request';

export const $qryAllUsers = async (params) => {
    let {data} = await axios.post('qryAllUser', {params})
    return data;
}

export const $deleteUserById = async (params) => {
    let {data} = await axios.post('deleteUserById', {params})
    return data;
}
