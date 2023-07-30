// 使用 declare 全局声明 ts 类型, 不需要 main.ts 引入
declare namespace Global {
  interface ListsT {
    name: string
    age: number
    sex: string
    address: string
  }
}
