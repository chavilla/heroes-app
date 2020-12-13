import React from 'react';
import {mount} from 'enzyme';
import '@testing-library/jest-dom';
import { AuthContext } from '../../../components/auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../components/types/types';

describe('<Navbar />', () => {

    const historyMock={
        push: jest.fn(),
        replace: jest.fn(),
        listen: jest.fn(),
        location: {},
        createHref:jest.fn()
    }
    
    const contexValue={ 
        dispatch: jest.fn(),
        user: {
            name: 'Jesus',
            logged:true
        }
     }

    const wrapper=mount(
        <AuthContext.Provider
        value={ contexValue }
        >
            <MemoryRouter>
                <Router history={ historyMock } >
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );
    
    afterEach(()=> jest.clearAllMocks());

    test('should to display itself exactly ', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('span').text()).toBe('Jesus');
    });

    test('should to call the handleLogout', () => {
        wrapper.find('button').prop('onClick')();
        expect(contexValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });
});