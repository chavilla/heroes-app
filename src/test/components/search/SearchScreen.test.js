import React, { Component } from 'react';
import {mount} from 'enzyme';
import '@testing-library/jest-dom';
import {MemoryRouter, Route} from 'react-router-dom'
import SearchScreen from '../../../components/search/SearchScreen';

describe('<SearchScreen />', () => {

    const history={
        push:jest.fn()
    }

    const wrapper=mount(
        <MemoryRouter initialEntries={['/search']}>
            <Route 
            path='/search'
            component={()=> <SearchScreen history={history} />} 
            />
        </MemoryRouter>
    );

    test('should to display the component', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-primary').text()).toBe('Search a hero');
    });

    test('input should have batman', () => {
        const wrapper=mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route 
                path='/search'
                component={()=> <SearchScreen history={history} />} 
                />
            </MemoryRouter>
        );
    
        expect(wrapper.find('input').prop('value')).toBe('batman');
    });


    test('should have an error', () => {
        const wrapper=mount(
            <MemoryRouter initialEntries={['/search?q=batmanxhdwe']}>
                <Route 
                path='/search'
                component={()=> <SearchScreen history={history} />} 
                />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-danger').exists()).toBe(true);
    });

    test('should have been called the history.push', () => {

        const wrapper=mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route 
                path='/search'
                component={()=> 
                <SearchScreen history={history} />} 
                />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', { preventDefault: jest.fn()});

        wrapper.find('form').prop('onSubmit')({preventDefault: jest.fn() });
        expect(history.push).toHaveBeenCalledWith('?q=batman');
    })
    
    
    
})
    
    