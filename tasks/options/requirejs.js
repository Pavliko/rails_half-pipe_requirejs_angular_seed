module.exports = {
  options: {
    dir: "<%= dirs.tmp %>/public/assets/scripts",
    almond: true,
    // out: "<%= dirs.tmp %>/public/assets/scripts/application.js",
    baseUrl: "<%= dirs.tmp %>/prepare/assets/build-scripts",
    mainConfigFile: "config/build.js",
    modules: [
      { name: 'common' },
      {
        name: 'index',
        exclude: ['common']
      },
      {
        name: 'page1',
        exclude: ['common']
      }
    ]
  },
  debug: {
    options: {
      useSourceUrl: true,
      optimize: "none",
    }
  },
  "public": {
    options: {
      optimize: "uglify2"
    }
  }
};
