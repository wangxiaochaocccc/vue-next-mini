import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    // 入口文件
    input: 'packages/vue/src/index.ts',
    // 输出文件
    output: [
      {
        // 开启sourcemap
        sourcemap: true,
        // file
        file: './packages/vue/dist/vue.js',
        // 生成的包格式：iife,一个自动执行的功能，适合script标签
        format: 'iife',
        // 变量名
        name: 'Vue'
      }
    ],
    plugins: [
      // ts支持
      typescript({
        sourceMap: true
      }),
      //模块导入路径不全
      resolve(),
      //将commonJs转换为es2015
      commonjs()
    ]
  }
]
