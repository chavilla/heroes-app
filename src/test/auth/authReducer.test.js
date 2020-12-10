const { authReducer } = require("../../components/auth/authReducer");
const { types } = require("../../components/types/types");

describe('authReducer testing', () => {
    
    const state={
        name:'Jesús',
        logged:false
    }

    test('return the default state', () => {
        const result=authReducer(state, '');
        expect(result.name).toBe(state.name);
        expect(result.logged).toBe(state.logged);
    });

    test('should to authenticate to the user', () => {

        const action={
            type: types.login,
            payload: { 
                name:'Juan'
            }
        }

        const result=authReducer(state, action);
        expect(result.name).toBe('Juan');
        expect(result.logged).toBe(true)

    });

    test('should to delete userName and set logged in false', () => {
        const action={
            type: types.logout
        }

        const result=authReducer(state,action);

        expect(result.name).toBe(undefined);
        expect(result.logged).toBe(false);

    })
    
    
    

})