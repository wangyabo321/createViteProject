import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Inspect from 'vite-plugin-inspect';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';


export default defineConfig({
  resolve: {
    // 定义根目录
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    Vue({
      reactivityTransform: true
    }),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],

      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),

        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ],

      dts: path.resolve(__dirname, 'auto-imports.d.ts'),
      eslintrc: {
        // 已存在文件设置默认 false，需要更新时再打开，防止每次更新都重新生成
        enabled: false,
        // 生成文件地址和名称
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      }
    }),

    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ],
      // 路径下自动生成文件夹存放全局指令
      dts: path.resolve(__dirname, 'components.d.ts')
    }),

    Icons({
      autoInstall: true
    }),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.jsx', 'src/**/*.ts'],
      exclude: ['./node_modules/**'],
      cache: false
    }),
    Inspect()
  ],

  css: {
    preprocessorOptions: {
      // define global scss variable
      scss: {
        additionalData: `@import "@/assets/style/mixin.scss";`
      }
    }
  },
  // 服务器配置
  server: {
    // 代理
    proxy: {
      '^/api': {
        target: 'http://http://127.101.0.1/:3000',
        changeOrigin: true
      }
    }
  },
  // 生产环境配置
  build: {
    // 指定输出路径
    assetsDir: './',
    minify: 'terser',
    // 指定输出文件路径
    outDir: 'dist',
    // 代码压缩配置
    terserOptions: {
      // 生产环境移除 console.log
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
