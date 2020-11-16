import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe("test MessageContainer", () => {
  it("test MessageContainer mount", () => {
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: '<p data-testid="message">Hello from the db!</p>'
      }
    })
    const text = wrapper.find('[data-testid="message"]').element.textContent
    expect(text).toEqual('Hello from the db!')
  })
})