import { mount } from '@vue/test-utils'
import IndexPage from '@/pages/index.vue'

describe('index.vue', () => {
  it('renders', () => {
    const wrapper = mount(IndexPage)
    expect(wrapper)
  })
})
