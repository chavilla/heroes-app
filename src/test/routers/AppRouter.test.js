import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../components/routers/AppRouter';
import { AuthContext } from '../../components/auth/AuthContext';

describe('description', () => {

    const contexValue={ 
        dispatch: jest.fn(),
        user: {
            logged:true
        }
     }
    
    test('should to display login if the user is not authenticated', () => {
        
        const wrapper=mount(
            <AuthContext.Provider value={ contexValue }>
                <AppRouter 
                />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should to display marvel if the user is authenticated', () => {
        const wrapper=mount(
            <AuthContext.Provider value={ contexValue }>
                <AppRouter 
                />
            </AuthContext.Provider>
        );

        //console.log(wrapper.html());

    });
    
})