/*
 * @Author: perli 1003914407@qq.com
 * @Date: 2023-03-25 15:39:45
 * @LastEditors: perli 1003914407@qq.com
 * @LastEditTime: 2023-03-25 16:36:28
 * @FilePath: /mini-vue-template/src/effect.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export let activeEffect 
export function effect(fn) {
  activeEffect = fn
  fn()
}