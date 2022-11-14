import { doGet } from './crud';

export async function getBannerUrl() {
    return await doGet('/myHomeData');
}

export async function getNovelDetail(id) {
    const { data } = await doGet(`https://comic.mkzcdn.com/comic/info/?comic_id=${id}`);
    return data;
}

export async function getReadCount(id) {
    let { data: { read_count } } = await doGet(`https://comic.mkzcdn.com/comic/info/count/?comic_id=${id}`);
    read_count = (read_count / Math.pow(10, 8)).toFixed(2) + '亿'
    return read_count;
}

export async function getColletionCount(id) {
    let { data: { collection_count } } = await doGet(`https://comic.mkzcdn.com/comic/info/count/?comic_id=${id}`);
    collection_count = (collection_count / Math.pow(10, 4)).toFixed(1) + '万'
    return collection_count;
}

export async function getNovelList(id) {
    let { data } = await doGet(`https://comic.mkzcdn.com/chapter/v1/?comic_id=${id}`);
    return data;
}

export default {
    getBannerUrl,
    getNovelDetail,
    getColletionCount,
    getNovelList
};