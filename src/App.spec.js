import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
    it('should render welcome message', () => {
        const wrapper = shallow(<App />)

        expect(wrapper.text()).toContain('Welcome')
    })
})