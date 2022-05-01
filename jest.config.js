module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  globals: {
    'vue-jest': {
      pug: {
        doctype: 'html',
      },
    },
  },
};
