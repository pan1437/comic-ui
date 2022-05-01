import path from 'path'

export default {
  target: 'browser',
  esm: 'babel',
  // lessInBabelMode: true, // babel 模式下做 less 编译
  lessInBabelMode: {
    globalVars: {
      hack:  `true; @import "${path.resolve(__dirname, 'src/style/themes/index.less')}";`
    },
  },
  // extractCSS: true,
  runtimeHelpers: true,
  entry: ['src/index.ts'],
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
  pkgs: [
    // 组件依赖构建顺序， 例如 a组件依赖于b组件，那么需要先编译 b,在编译a,则 这里可以控制组件编译顺序
  ],
};
