import { doGet } from './crud'

export async function getBannerUrl() {
    return await doGet('/homeBannerData')
}

export default {
    getBannerUrl
}