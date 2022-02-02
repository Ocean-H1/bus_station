import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 当前激活车站信息
        stationInfo: {
            station_id: 15,
            station_name: '纺织城客运站',
            station_english_name: 'fangzhichengkeyunzhan',
            longitude: 109.069852,
            latitude: 34.280149,
            station_address:
                '陕西省西安市新雁塔区朱雀大街南段与南三环交汇处西南角（地铁：2号线三爻地铁站 | 公交：928路、203路、278路、920路）',
        },
    },
    mutations: {
        // 修改车站信息为用户点击的车站
        setPosition(state, activeStation) {
            state.stationInfo = activeStation
        },
    },
    actions: {},
})


