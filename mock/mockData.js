const novelDetailData = require('./data/novelDetailData.json');
const novelListData = require('./data/novelListData.json');
const novelContentData = require('./data/novelContentData.json');
// const homeBannerData = require('./data/homeBannerData.json');
const myHomeData = require('./data/myHomeData.json');
const assortImgData=require('./data/assortImgData.json')
const theme_1data = require('./data/theme_1data.json')
const progress_1data = require('./data/progress_1data.json')
const masses_1data = require('./data/masses_1data.json')
const attribute_1data = require('./data/attribute_1data.json')
module.exports = () => {
    return {
        novelDetailData,
        novelListData,
        novelContentData,
        // homeBannerData
        myHomeData,
        // assortImgData
        theme_1data,
        progress_1data,
        masses_1data,
        attribute_1data
    }
}