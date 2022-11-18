import { doGet } from './crud';

export async function getMassesDate(params) {
    const { data: { list } } = await doGet('/masses_1data');
    return list;
}

export default {
    getMassesDate
};