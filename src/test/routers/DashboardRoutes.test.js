import React from 'react';
import {mount} from 'enzyme';
import { DashboardRoutes } from '../../components/routers/DashboardRoutes';
import { AuthContext } from '../../components/auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';

const contexValue={ 
    dispatch: jest.fn(),
    user: {
        name:'Jose',
        logged:true
    }
 };

describe('<DashboardRoutes />', () => {
    test('should to display the component', () => {
        const wrapper=mount(
            <AuthContext.Provider value={ contexValue }>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('span').text()).toBe('Jose');
    })
    
})
