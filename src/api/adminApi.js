import axios from '../utils/request';

export const $adminLogin = async (params) => {
    let {data} = await axios.get('adminLogin', {params})
    return data;
}
