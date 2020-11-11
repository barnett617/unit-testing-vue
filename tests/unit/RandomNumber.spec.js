import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  test('默认情况下，组件数据应该是0', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  test('点击按钮，数据应该在0-10之间', async () => {
    const wrapper = mount(RandomNumber)
    // trigger方法要传入字符串类型的事件类型
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    const randowNumber = parseInt(wrapper.find('span').element.textContent)
    expect(randowNumber).toBeGreaterThanOrEqual(1)
    expect(randowNumber).toBeLessThanOrEqual(10)
  })

  test('传入参数后，点击按钮，数据应该在0-10之间', async () => {
    const wrapper = mount(RandomNumber, {
      propsData: {
        min: 200,
        max: 300
      }
    })
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    const randomNumber = parseInt(wrapper.find('span').element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
})