import { doGet } from './crud';

export async function getFirstData(params) {
    const { data: { list } } = await doGet('/progresss_1data');
    return list;
}

export default {
    getprogressData,
};