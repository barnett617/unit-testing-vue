import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')
beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('成功调用接口，正常展示数据', async () => {
    const mockMessage = 'Hello from the db!'
    getMessage.mockResolvedValueOnce({ text: mockMessage })
    const wrapper = mount(MessageDisplay)
    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1)
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual(mockMessage)
  })
  it('调用接口失败，展示错误', async () => {
    const mockError = 'err'
    getMessage.mockRejectedValueOnce(mockError)
    const wrapper = mount(MessageDisplay)
    await flushPromises()
    // Expected number of calls: 1
    // Received number of calls: 2
    expect(getMessage).toHaveBeenCalledTimes(1)
    const error = wrapper.find('[data-testid="message-error"]').element.textContent
    expect(error).toEqual(mockError)
  })
})