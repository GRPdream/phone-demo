var info = {
  name: "lx",
  age: 20
}
export default info

/*
导出 和 引入 的两种方法：
1. ES6 中使用 import 和 export
2. node 中使用 require 和 module.export

此外，一个文件中只能有一个 export default，因为他是默认导出的，所以接受时可以随意命名
但是，如果普通的用 export 导出的话，就只能用 { } 来接收，如果要取别名的话，可以用 as ，比如 import { title as title123 } from ***
*/