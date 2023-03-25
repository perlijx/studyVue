var Reactivity = (function (exports) {
  'use strict';

  /*
   * @Author: perli 1003914407@qq.com
   * @Date: 2023-03-25 15:39:45
   * @LastEditors: perli 1003914407@qq.com
   * @LastEditTime: 2023-03-25 15:59:03
   * @FilePath: /mini-vue-template/src/effect.js
   * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
   */
  exports.activeEffect = null;
  function effect$1(fn) {
    exports.activeEffect = fn;
    fn();
  }

  /*
   * @Author: perli 1003914407@qq.com
   * @Date: 2023-03-25 15:13:00
   * @LastEditors: perli 1003914407@qq.com
   * @LastEditTime: 2023-03-25 16:17:31
   * @FilePath: /mini-vue-template/src/reactivity.js
   * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
   */
  let effect = new Set();
  function reactive(target) {
    return new Proxy(target,handler)
  }
  const handler ={
    get(obj,key){
      exports.activeEffect&&effect.add(exports.activeEffect);
      return Reflect.get(obj,key)
    },
    set(obj,key,value) {
      const res =Reflect.set(obj,key,value);
      exports.activeEffect&&effect.forEach(fn => {
        fn();
      });
      return res
    },
    deleteProxy(obj, key) {
      return Reflect.defineProperty(obj, key)
    }
  };

  exports.effect = effect$1;
  exports.reactive = reactive;

  return exports;

})({});
