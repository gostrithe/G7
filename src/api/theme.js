import { doGet } from './crud';

export async function getFirstData(params) {
    const { data: { list } } = await doGet('/theme_1data');
    return list;
}

export default {
    getFirstData
};