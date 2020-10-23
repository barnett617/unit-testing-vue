import AppHeader from '@/components/AppHeader.vue'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  it('未登录，不显示登出按钮', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  it('已登录，显示登出按钮', async () => {
    const wrapper = mount(AppHeader)
    // setData cause DOM updated
    wrapper.setData({
      loggedIn: true
    })
    // wait until DOM re-rendered
    await wrapper.vm.$nextTick()
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})