import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

configure({ adapter: new Adapter() });

it('renders the link inside the output area', () => {
  const output = shallow(<App />)
  expect(output.find('div').find('button').length).toEqual(1)
})

it('renders a button inside the main area', () => {
  const output = shallow(<App />)
  expect(output.find('div').find('button').length).toEqual(1)
})

it('handles the click event and calls a window.alert', () => {
  global.alert = jest.fn()
  const output = shallow(<App/>)
  
  output.find('button').simulate('click')
  expect(global.alert).toHaveBeenCalledWith('Hello')
})