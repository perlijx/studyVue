/*
 * @Author: perli 1003914407@qq.com
 * @Date: 2023-03-25 15:06:10
 * @LastEditors: perli 1003914407@qq.com
 * @LastEditTime: 2023-03-25 17:45:47
 * @FilePath: /mini-vue-template/__test__/reactivity.spec.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { reactive } from '../src/reactivity/reactive'
import { effect } from '../src/reactivity/effect'
describe("reactivity", () => {
  it("reactivity should work", () => {
    const original = {foo:"foo"}
    const observed = reactive(original)

    observed.foo = "fooooo~"
    expect(original.foo).toBe("fooooo~")

    observed.bar = "bar"

    delete observed.bar
    expect(original.bar).toBe(undefined)
  })

  it("effect", () => {
    let dummy
    const counter = reactive({ num: 0 })
    const fnSpy = jest.fn(() => {
      dummy = counter.num
    })
    effect(fnSpy)
    expect(fnSpy).toHaveBeenCalledTimes(1)
    expect(dummy).toBe(0)
    
    counter.num =1
    expect(fnSpy).toHaveBeenCalledTimes(2)
    expect(dummy).toBe(1)
  })

  it("effect should linked to the exact key", () => {
    const observe = reactive({foo:"foo",bar: "bar"})
    const fnSpy = jest.fn(() => {
      observe.foo
    })
    effect(fnSpy)
    observe.foo = "fooo"
    observe.bar = "barrr"
    expect(fnSpy).toHaveBeenCalledTimes(2)
  })
  it("effect nesting", () => {
    const observe = reactive({foo:"foo",bar: "bar"})
  
    effect(()=>{
      console.log(observe.foo);
      effect(()=>{
        console.log(observe.bar);
      })
    })
  })
})