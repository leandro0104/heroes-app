import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Pruebas en <AppRouter />', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('debe de mostrar login si no esta autenticado ', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();


    });


    test('debe de mostrar el componente marvel si esta autenticado', () => {
        
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Leandro'
            }
        }


        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists()).toBe(true);


    })
    
    
})
