import { doGet } from './crud';

export async function getFirstData(params) {
    const { data: { list } } = await doGet('/theme_1data');
    return list;
}

export async function updateData(params) {
    let src = Math.random() > 0.5 ? '/theme_1dataPage2' : '/theme_1data'
    const { data: { list } } = await doGet(src);
    return list;
}

export default {
    getFirstData,
    updateData
};