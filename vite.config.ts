import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';
import postCssPxToRem from 'postcss-pxtorem';
import viteCompression from 'vite-plugin-compression';
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  base: './', //不加打包后白屏
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    WindiCSS(),
    DefineOptions(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon'
        })
      ],
      dts: 'src/auto-import.d.ts'
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ['ep']
        }),
        ElementPlusResolver()
      ],
      dts: 'src/components.d.ts'
    }),
    Icons({
      autoInstall: true
    }),
    viteCompression()
  ],
  server: {
    https: false, // 是否开启 https
    // port: 3000, // 设置服务启动的端口号；如果端口已经被使用，Vite 会自动尝试下一个可用的端口
    open: true, // 服务启动后自动打开浏览器
    host: '0.0.0.0',
    hmr: true, //开启热更新
    proxy: {
      // 代理配置
      '/api': {
        target: 'https://om.wwcpb.com',
        // target: 'https://dj.dyfmusic.com',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/music/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    postcss: {
      plugins: [
        postCssPxToRem({
          // rootValue({ file }) {
          // file => 要编译的样式的路径
          //   if (file.includes('aiMb')) {
          //     console.log(file);
          //     console.log('mobile', file.includes('aiMb'));
          //     return 37.5;
          //   } else {
          //     console.log(file);
          //     console.log('pc', file.includes('taohuaPc'));
          //     return 192;
          //   }
          // },
          rootValue: 4, // （设计稿/10）1rem的大小
          propList: ['*'] // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  },
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    // minify: 'terser', // 混淆器，terser构建后文件体积更小
    // 清除console和debugger(minify: 'terser',)设置后这个terserOptions才有用
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true
    //   }
    // },
    rollupOptions: {
      output: {
        //静态资源分类打包 指定打包输出的js文件名称
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        //设置css和图片的文件夹名称，但是有弊端，css设置的背景图片访问不到,路径是错误的
      }
    }
  }
});
