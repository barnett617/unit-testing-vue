import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emit an event with a user data payload', () => {
    const wrapper = mount(LoginForm)
    const inputElement = wrapper.find('input[data-testid="name-input"]')
    inputElement.setValue('Wilson')
    wrapper.trigger('submit')
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)
    const expectedPayload = { name: 'Wilson' }
    expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload)
  })
})