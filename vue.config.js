module.exports = {
  devServer: {
    disableHostCheck: false,
  },
  assetsDir: 'static/',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true, //允许链式调用的换行
      },
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            // 把px单位换算成rem单位
            rootValue: 37.5, // 换算的基数(设计图375的根字体为37.5)
            // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ["*"],
          }),
        ],
      },
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
};
