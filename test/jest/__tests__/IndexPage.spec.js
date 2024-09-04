import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('ประวัติส่วนตัว', () => {

  it('ชื่อ', () => {
    const wrapper = shallowMount(IndexPage, /*เช็ค*/{
      data () {
        return {
          title: 'ญาณิศา'//เช็ค
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('ญาณิศา') //เช็ค
  })

  it('นามสกุล', () => {
    const wrapper = shallowMount(IndexPage, /*เช็ค*/{
      data () {
        return {
          title: 'แดงฉ่ำ'//เช็ค
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('แดงฉ่ำ') //เช็ค
  })

  it('รหัสนักศึกษา', () => {
    const wrapper = shallowMount(IndexPage, /*เช็ค*/{
      data () {
        return {
          title: '6604101323'//เช็ค
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('6604101323') //เช็ค
  })

  it('ชื่อเล่น', () => {
    const wrapper = shallowMount(IndexPage, /*เช็ค*/{
      data () {
        return {
          title: 'มิ้ว'//เช็ค
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('มิ้ว') //เช็ค
  })
})

/*import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  })
  it('check text content to be as defined in variable', () => {
  const wrapper = shallowMount(IndexPage, {
    data () {
      return {
        title: 'I love Vue.'
      }
    }
  })
  let header = wrapper.find('.htmlClass h1')
  expect(header.text()).toBe('I love Vue.')
  })

  test('should show the form element on the user output', () => {
    const wrapper = shallowMount(InputPage)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  test('should contain input fields in template', () => {
    const wrapper = shallowMount(InputPage)
    expect(wrapper.find('form > input').exists()).toBe(true)
  })

  test('should have button', () => {
    const wrapper = shallowMount(InputPage)
    expect(wrapper.find('button').exists()).toBe(true)
  })
})*/
