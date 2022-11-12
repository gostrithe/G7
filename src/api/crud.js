import instance from './instance';

export async function doPost(url, data, config) {
    try {
        const result = await instance.post(url, data, config);  
        return result;
    } catch (error) {
        console.log('doPost: error=', error);
    }
}

export async function doGet(url, data, config) {
    try {
        if (data) {
            // url添加查询参数
            const params = new URLSearchParams();
            for (const key in data) {
                params.append(key, data[key]);
            }
            url += `?${params.toString()}`;  
        }
        const result = await instance.get(url, config);
        return result;
    } catch (error) {
        console.log('doGet: error=', error);
    }
}

export async function doPut(url, data, config) {
    try {
        const result = await instance.put(url, data, config);
        return result;
    } catch (error) {
        console.log('doPut: error=', error);
    }
}

export async function doDelete(url, config) {
    try {
        const result = await instance.delete(url, config);
        return result;
    } catch (error) {
        console.log('doDelete: error=', error);
    }
}

export default {
    doGet,
    doPost,
    doPut,
    doDelete
}