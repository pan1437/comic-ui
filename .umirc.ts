import { defineConfig } from 'dumi';
import path from 'path'

// 此处更换为自己的仓库名
let base = '/comic-ui';
let publicPath = '/comic-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'Comic UI', // 站点名称
  mode: 'site',
  outputPath: 'doc-site', // 输出文件夹
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  base,
  publicPath,
  alias: {
    '@': '/src'
  },
  chainWebpack(config) {
    config.module
      .rule('less-loader')
      .test(/\.less$/)
      .use('less-loader')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/style/themes/index.less'),
          path.resolve(__dirname, './src/style/demo/index.less'),
        ],
      })
      .end();
  },
});