const novelDetailData = require('./data/novelDetailData.json');
const novelListData = require('./data/novelListData.json');
const novelContentData = require('./data/novelContentData.json');
const homeBannerData = require('./data/homeBannerData.json');

module.exports = () => {
    return {
        novelDetailData,
        novelListData,
        novelContentData,
        homeBannerData
    }
}