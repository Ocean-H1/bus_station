import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 车站列表
        stationList: [],
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
        setLoginStatus(state, choice) {
            state.isLogin = choice
        },
        // 设置车站列表
        setStationList(state, list) {
            state.stationList = list
        }
    },
    actions: {},
})


