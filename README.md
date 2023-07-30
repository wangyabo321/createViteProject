# Vue 3 + TypeScript + Vite

### vue3 使用路由及配置 vite.alias 简化导入写化：
   ```1、安装 @type/node 
         cnpm i @type/node
      2、修改 vite.config.ts
         2.1 引入
            import path from 'path'

         2.2 配置
            export default defineConfig ({
               resolve: {
                  alias: {
                     '@': path.resolve(__dirname, 'src')
                  }
               }
            })

         2.3 修改 tsconfig.json (不修改没有提示)
            "compilerOptions": {
               "baseUrl": "./",
               "paths": {
                  "@/*": ["./src/*"]  // 格式一定要写对符号*不能少不然找不到@或者没有代码提示
               }
            } 
   ```
### 安装 sass
   ```1、安装 sass、sass-loader
         cnpm i sass sass-loader
      2、在 vite.config.js 配置 scss 全局变量
         css: {
            preprocessorOptions: {
               scss: {
                  additionalData: "@import '@/assets/style/mixin.scss';" // 全局导出公共样式
               }
            }
         }
   ```
### 按需加载配置 (参考 package.json)
   ```
      1、安装依赖
         npm i -D unplugin-auto-import
      2、在 vite.config.js 配置
         import AutoImport from 'unplugin-auto-import/vite';

         plugins: [
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
            }),
         ]
   ```

