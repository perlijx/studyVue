<!--
 * @Author: perli 1003914407@qq.com
 * @Date: 2023-03-25 14:16:44
 * @LastEditors: perli 1003914407@qq.com
 * @LastEditTime: 2023-03-25 14:41:11
 * @FilePath: /mini-vue-template/readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## vue入门

### 框架设计和响应式

#### 数据驱动

> vue2 和 vu3 响应式区别

- vue2

  - 通过`Object.defineProperty`实现数据劫持添加响应式数据
  - `Object.defineProperty`无法监听数组的变化，需要使用`Array.prototype`上的方法来修改数组，才能触发视图更新
  - `Object.defineProperty`无法监听动态添加的属性，需要使用`Vue.set`方法来添加响应式数据
  - `Object.defineProperty`无法监听删除的属性，需要使用`Vue.delete`方法来删除响应式数据
  -  `Object.defineProperty`只能监听对象的一个key，如果要监听多个key，需要遍历对象，逐个添加响应式数据如果对象嵌套对象，需要递归遍历，逐个添加响应式数据
- vue3

  - 通过`Proxy`实现数据劫持
  - `Proxy`可以监听数组的变化，不需要使用`Array.prototype`上的方法来修改数组，就能触发视图更新
  - `Proxy`可以监听动态添加的属性，不需要使用`Vue.set`方法来添加响应式数据
  - `Proxy`可以监听删除的属性，不需要使用`Vue.delete`方法来删除响应式数据
  - `Proxy`可以监听对象的多个key，不需要遍历对象，逐个添加响应式数据
  - `Proxy`可以监听对象嵌套对象，不需要递归遍历，逐个添加响应式数据
    




