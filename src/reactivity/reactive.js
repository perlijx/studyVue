/*
 * @Author: perli 1003914407@qq.com
 * @Date: 2023-03-25 15:13:00
 * @LastEditors: perli 1003914407@qq.com
 * @LastEditTime: 2023-03-25 17:26:17
 * @FilePath: /mini-vue-template/src/reactivity.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { activeEffect } from "./effect"
let targetMap = new Map()

function track(target, key) {
  let depMap = targetMap.get(target)
  if(!depMap) {
    depMap = new Map()
    targetMap.set(target,depMap)
  }
  let dep = depMap.get(key)
  if(!dep) {
    dep = new Set()
    depMap.set(key,dep)
  }
  if(!activeEffect) return
  dep.add(activeEffect)
}
function trigger(target,key) {
  const depMap = targetMap.get(target)
  if(!depMap) return
  const dep = depMap.get(key)
  if(dep) {
    dep.forEach(fn => fn())
  }
}
export function reactive(target) {
  return new Proxy(target,handler)
}
const handler ={
  get(obj,key){
   
    const res = Reflect.get(obj,key)
    track(obj,key)
    return res
  },
  set(obj,key,value) {
    const res =Reflect.set(obj,key,value)
    trigger(obj, key)
    return res
  },
  deleteProxy(obj, key) {
    return Reflect.defineProperty(obj, key)
  }
}