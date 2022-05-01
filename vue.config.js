module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/styles.scss";',
      },
    },
  },

  pwa: {
    name: 'Quiz App',
    themeColor: '#6a5ae0',
    manifestOptions: {
      short_name: 'Quiz App',
    },
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
};
