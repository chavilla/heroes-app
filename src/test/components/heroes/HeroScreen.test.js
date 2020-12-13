import React from 'react';
import {mount} from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('<HeroScreen />', () => {

    const history={
        length:5,
        push: jest.fn(),
        goBack:jest.fn(),
    }
    
    test('should to display Redirect if there are not heroes', () => {
        const wrapper=mount(
            <MemoryRouter initialEntries={ ['/hero'] } >
                <HeroScreen history={ history } />
            </MemoryRouter>
        );
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });


    test('should to return a heroe', () => {
        const wrapper=mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-spider'] } >
                <Route path='/hero/:heroId' component={HeroScreen} />
            </MemoryRouter>
        );
    
       expect(wrapper.find('h3').text()).toBe('Spider Man');
    });

    test('should to go back with the history.push', () => {
        const history={
            length:7,
            push: jest.fn(),
            goBack:jest.fn(),
        }

        const wrapper=mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-spider'] } >
                <Route 
                path='/hero/:heroId' 
                component={()=><HeroScreen history={history} /> }/>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.goBack).toHaveBeenCalled();

    });

    test('should call the redirect if there is not a heroe', () => {

        const wrapper=mount(
            <MemoryRouter initialEntries={ ['/hero/'] } >
                <Route 
                path='/hero/:heroId' 
                component={()=><HeroScreen history={history} /> }/>
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('');
    })
    

});