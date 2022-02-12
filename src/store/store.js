import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 车站列表
        stationList: [
            {
                station_id: 1,
                station_name: '城西客运站',
                station_english_name: 'chengxikeyunzhan', //客运站名称拼音，供前端做根据首字母排序展示
                longitude: 108.874252, //经度坐标
                latitude: 34.273998, //纬度坐标
                station_address:
                    '陕西省西安市莲湖区枣园东路92号（地铁：1号线汉城路地铁站 | 公交：212路、23路、50路、103路）', //车站详细地址
            },
            {
                station_id: 6,
                station_name: '三府湾客运站',
                station_english_name: 'sanfuwankeyunzhan',
                longitude: 108.976118,
                latitude: 34.27803,
                station_address:
                    '陕西省西安市新城区长缨西路353号（地铁：4号线火车站地铁站、1号线朝阳门地铁站 | 公交：28路、49路、159路、176路）',
            },
            {
                station_id: 15,
                station_name: '纺织城客运站',
                station_english_name: 'fangzhichengkeyunzhan',
                longitude: 109.069852,
                latitude: 34.280149,
                station_address:
                    '陕西省西安市新雁塔区朱雀大街南段与南三环交汇处西南角（地铁：2号线三爻地铁站 | 公交：928路、203路、278路、920路）',
            },
            {
                station_id: 1,
                station_name: '城西客运站',
                station_english_name: 'chengxikeyunzhan', //客运站名称拼音，供前端做根据首字母排序展示
                longitude: 108.874252, //经度坐标
                latitude: 34.273998, //纬度坐标
                station_address:
                    '陕西省西安市莲湖区枣园东路92号（地铁：1号线汉城路地铁站 | 公交：212路、23路、50路、103路）', //车站详细地址
            },
            {
                station_id: 6,
                station_name: '三府湾客运站',
                station_english_name: 'sanfuwankeyunzhan',
                longitude: 108.976118,
                latitude: 34.27803,
                station_address:
                    '陕西省西安市新城区长缨西路353号（地铁：4号线火车站地铁站、1号线朝阳门地铁站 | 公交：28路、49路、159路、176路）',
            },
            {
                station_id: 15,
                station_name: '纺织城客运站',
                station_english_name: 'fangzhichengkeyunzhan',
                longitude: 109.069852,
                latitude: 34.280149,
                station_address:
                    '陕西省西安市新雁塔区朱雀大街南段与南三环交汇处西南角（地铁：2号线三爻地铁站 | 公交：928路、203路、278路、920路）',
            },
            {
                station_id: 1,
                station_name: '城西客运站',
                station_english_name: 'chengxikeyunzhan', //客运站名称拼音，供前端做根据首字母排序展示
                longitude: 108.874252, //经度坐标
                latitude: 34.273998, //纬度坐标
                station_address:
                    '陕西省西安市莲湖区枣园东路92号（地铁：1号线汉城路地铁站 | 公交：212路、23路、50路、103路）', //车站详细地址
            },
            {
                station_id: 6,
                station_name: '三府湾客运站',
                station_english_name: 'sanfuwankeyunzhan',
                longitude: 108.976118,
                latitude: 34.27803,
                station_address:
                    '陕西省西安市新城区长缨西路353号（地铁：4号线火车站地铁站、1号线朝阳门地铁站 | 公交：28路、49路、159路、176路）',
            },
            {
                station_id: 15,
                station_name: '纺织城客运站',
                station_english_name: 'fangzhichengkeyunzhan',
                longitude: 109.069852,
                latitude: 34.280149,
                station_address:
                    '陕西省西安市新雁塔区朱雀大街南段与南三环交汇处西南角（地铁：2号线三爻地铁站 | 公交：928路、203路、278路、920路）',
            },
            {
                station_id: 6,
                station_name: '三府湾客运站',
                station_english_name: 'sanfuwankeyunzhan',
                longitude: 108.976118,
                latitude: 34.27803,
                station_address:
                    '陕西省西安市新城区长缨西路353号（地铁：4号线火车站地铁站、1号线朝阳门地铁站 | 公交：28路、49路、159路、176路）',
            },
            {
                station_id: 1,
                station_name: '城西客运站',
                station_english_name: 'chengxikeyunzhan', //客运站名称拼音，供前端做根据首字母排序展示
                longitude: 108.874252, //经度坐标
                latitude: 34.273998, //纬度坐标
                station_address:
                    '陕西省西安市莲湖区枣园东路92号（地铁：1号线汉城路地铁站 | 公交：212路、23路、50路、103路）', //车站详细地址
            },
            {
                station_id: 6,
                station_name: '三府湾客运站',
                station_english_name: 'sanfuwankeyunzhan',
                longitude: 108.976118,
                latitude: 34.27803,
                station_address:
                    '陕西省西安市新城区长缨西路353号（地铁：4号线火车站地铁站、1号线朝阳门地铁站 | 公交：28路、49路、159路、176路）',
            },
            {
                station_id: 15,
                station_name: '纺织城客运站',
                station_english_name: 'fangzhichengkeyunzhan',
                longitude: 109.069852,
                latitude: 34.280149,
                station_address:
                    '陕西省西安市新雁塔区朱雀大街南段与南三环交汇处西南角（地铁：2号线三爻地铁站 | 公交：928路、203路、278路、920路）',
            },
        ],
        // 当前激活车站信息(地图页面)
        activeStation: {},
        // 用户的登录状态
        isLogin: 0,
    },
    mutations: {
        // 修改车站信息为用户点击的车站
        setPosition(state, activeStation) {
            state.activeStation = activeStation
        },
        // 修改用户的登录态
        setLoginStatus(state,choice) {
            state.isLogin = choice
        },
    },
    actions: {},
})


