// import Vue from 'vue'
import Todo from '@/components/Todo'
// import { shallowMount } from '@vue/test-utils'
import { createLocalVue, shallowMount } from '@vue/test-utils'

describe('Todo Checks if Exlement text content exist - TODO, ADD ITEM, COMPLETED, Edit, Delete', () => {
  const msgTodo = 'TODO'
  const msgAddItem = 'ADD ITEM'
  const msgCompleted = 'COMPLETED'
  const msgEdit = 'Edit'
  const msgDelete = 'Delete'
  const wrapper = shallowMount(Todo, {
  })

  it('Check if TODO text Content is rendered', () => {
    expect(wrapper.find('h4#todos-label').text().trim()).toEqual(msgTodo)
  })
  it('Check if ADD ITEM text Content is rendered', () => {
    expect(wrapper.find('h4#additem').text().trim()).toEqual(msgAddItem)
  })
  it('Check if COMPLETED text Content is rendered', () => {
    expect(wrapper.find('h4#todos-label-completed').text().trim()).toEqual(msgCompleted)
  })
  it('Check if Edit text Content is rendered', () => {
    expect(wrapper.find('div#todo-edit-1').text().trim()).toEqual(msgEdit)
  })
  it('Check if Delete text Content is rendered', () => {
    expect(wrapper.find('div#todo-remove-1').text().trim()).toEqual(msgDelete)
  })
})

describe('Perform Add, Delete, Edit and Save operation ', () => {
  let wrapper
  const msg = 'Edit'
  const savemsg = 'Save'
  const keyword = 'ender pop'
  const keywordNotEntered = 'no key entered'

  beforeEach(() => {
    const freshLocalVue = createLocalVue()
    wrapper = shallowMount(Todo, {
      freshLocalVue,
      propsData: {
        workingName: 'ender'
      }
    })
  })

  it('Checks if edit is availabe ', () => {
    expect(wrapper.find('div#todo-edit-1').text().trim()).toEqual(msg)
  })
  it('Click edit and enter a value and check if entered value exits ', () => {
    expect(wrapper.find('div#todo-edit-1').trigger('click'))
    const input = wrapper.find('#component1 > ul:nth-child(4) > li:nth-child(1) > label > input[type="text"]')
    input.setValue(keyword)
    expect(wrapper.find('#component1 > ul:nth-child(4) > li:nth-child(1) > label > span.text').text().trim()).toEqual(keyword)
  })
  it('Click Save and trigger save, validate the saved text content  ', () => {
    expect(wrapper.find('div#todo-edit-1').trigger('click'))
    const input = wrapper.find('#component1 > ul:nth-child(4) > li:nth-child(1) > label > input[type="text"]')
    input.setValue(keyword)
    expect(wrapper.find('div#todo-save-1').text().trim()).toEqual(savemsg)
    expect(wrapper.find('div#todo-save-1').trigger('click'))
    expect(wrapper.find('#component1 > ul:nth-child(4) > li:nth-child(1) > label > span.text').text().trim()).toEqual(keyword)
  })
  it('check for falsy text content within the list item', () => {
    expect(wrapper.find('#component1 > ul:nth-child(4) > li:nth-child(1) > label > span.text').text().trim()).not.toBe(keywordNotEntered)
  })

  it('Delete the first item - \'Buy Grocery Items\'and validate ', () => {
    const msg = 'Delete'
    const oldDeleteItem = 'Buy Grocery Items'
    expect(wrapper.find('div#todo-remove-1').text().trim()).toEqual(msg)
    expect(wrapper.find('div#todo-remove-1').trigger('click'))
    expect(wrapper.find('#component1 > ul:nth-child(4) > li:nth-child(1) > label > span.text').text().trim()).not.toBe(oldDeleteItem)
  })

  it('Delete the Second item - \'Meet Michael and Rahim\' and validate ', () => {
    const msg = 'Delete'
    const oldDeleteItem = 'Meet Michael and Rahim'
    expect(wrapper.find('div#todo-remove-2').text().trim()).toEqual(msg)
    expect(wrapper.find('div#todo-remove-2').trigger('click'))
    expect(wrapper.find('#component1 > ul:nth-child(4) > li:nth-child(1) > label > span.text').text().trim()).not.toBe(oldDeleteItem)
  })

  it('Delete the Third item - \'Buy GPU\'" and validate ', () => {
    const msg = 'Delete'
    const oldDeleteItem = 'Buy GPU'
    expect(wrapper.find('div#todo-remove-2').text().trim()).toEqual(msg)
    expect(wrapper.find('div#todo-remove-2').trigger('click'))
    expect(wrapper.find('#component1 > ul:nth-child(4) > li:nth-child(1) > label > span.text').text().trim()).not.toBe(oldDeleteItem)
  })
  it('Check if no element is available in Todo listings ', () => {
    const noEleMsg = 'Either you\'ve done everything already or there are still things to add to your list. Add your first todo ↓'
    expect(wrapper.find('#component1 > div.empty-state > p').text().trim()).toEqual(noEleMsg)
  })
  it('Check if no element is available in Todo listings ', () => {
    const noEleMsg = 'Either you\'ve done everything already or there are still things to add to your list. Add your first todo ↓'
    expect(wrapper.find('#component1 > div.empty-state > p').text().trim()).toEqual(noEleMsg)
  })
  it('Enter a value and Add a item ', () => {
    const msg = 'Add'
    const keyword = 'ender123123'
    const input = wrapper.find('input#add')
    // wrapper.setData({ workingName: 'bar' })
    // input.element.value = keyword
    input.setValue(keyword)
    // expect(input.value).toEqual(keyword)
    expect(wrapper.vm.workingName).toBe(keyword)
    // expect(wrapper.find('#add').text().trim()).toEqual(keyword)
    expect(wrapper.find('button').text().trim()).toEqual(msg)
    // input.trigger('change') // v-model updated
    // input.trigger('click')
    expect(wrapper.find('button[type="submit"]').trigger('click'))
    // expect(wrapper.vm.todos[4].name).toBe(keyword)
    // expect(wrapper.vm.$el.querySelector('div#todo-remove-4')).toEqual(true)
    // expect(wrapper.find('#todo-4').text().trim()).toEqual(keyword)
    // expect(wrapper.find('#component1 > ul:nth-child(4) > li:nth-child(2) > label > span.text').text().trim()).toEqual(keyword)
    // expect(wrapper.find('#component1 > ul:nth-child(4) > li:nth-child(3) > label > span.text').text().trim()).toEqual(keyword)
    // expect(wrapper.find('#component1 > ul:nth-child(4) > li:nth-child(4) > label > span.text').text().trim()).toEqual(keyword)
  })
})
