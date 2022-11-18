import { doGet } from './crud';

export async function getAttributeData(params) {
    const { data: { list } } = await doGet('/attribute_1data');
    return list;
}

export default {
    getAttributeData
};