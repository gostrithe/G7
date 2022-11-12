import { doGet } from './crud'

export async function getBannerUrl() {
    return await doGet('/myHomeData')
}

export default {
    getBannerUrl
}