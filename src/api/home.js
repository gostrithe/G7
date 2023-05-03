import { doGet } from './crud';

export async function getData() {
    // 获取首页数据
    // return await doGet('/myHomeData');
    return await doGet('http://localhost:3000/homeData')
}

export async function getNovelDetail(id) {
    const { data } = await doGet(`https://comic.mkzcdn.com/comic/info/?comic_id=${id}`);
    return data;
}

export async function getReadCount(id) {
    let { data: { read_count } } = await doGet(`https://comic.mkzcdn.com/comic/info/count/?comic_id=${id}`);
    read_count = (read_count / Math.pow(10, 8)).toFixed(2) + '亿';
    return read_count;
}

export async function getColletionCount(id) {
    let { data: { collection_count } } = await doGet(`https://comic.mkzcdn.com/comic/info/count/?comic_id=${id}`);
    collection_count = (collection_count / Math.pow(10, 4)).toFixed(1) + '万';
    return collection_count;
}

export async function getNovelList(id) {
    let { data } = await doGet(`https://comic.mkzcdn.com/chapter/v1/?comic_id=${id}`);
    return data;
}

export async function getNovelContent(id, chapter) {
    let { data: { page } } = await doGet(`https://comic.mkzcdn.com/chapter/content/v1/?chapter_id=${chapter}&comic_id=${id}&format=1&quality=1&sign=0&type=1&uid=0`);
    return page;
}

export default {
    getData,
    getNovelDetail,
    getColletionCount,
    getNovelList,
    getNovelContent
};