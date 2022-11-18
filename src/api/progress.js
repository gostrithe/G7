import { doGet } from './crud';

export async function  getprogressData(params) {
    const { data: { list } } = await doGet('/progress_1data');
    return list;
}

export default {
    getprogressData,
};