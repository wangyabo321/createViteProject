### generateFont 用于生成字体库

(1) font 文件中存放未压缩的字体库
(2) font.css 是字体库的引用
(3) 压缩后会生成 .font-spider 文件夹, 存放的是未压缩的字体库

### 压缩步骤

1、全局安装
cnpm i font-spider -g

2、在 font.css 中定义字体

3、控制台 cmd 运行（注意: 每次的字体不同, 需要重新生成）
font-spider ./demo.html

4. 在 vue 中使用 需要在 main.ts 中全局引入
   import './assets/css/font.css'
