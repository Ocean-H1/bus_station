module.exports = {
    devServer: {
        before: require('./mock/index') //引入mock/index.js
    }
}