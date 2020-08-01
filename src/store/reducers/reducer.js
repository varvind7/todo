import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos:[]
}

const reducer = (state=initialState,action) => {
    switch(action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            }
        
    }
    return state;
}

export default reducer;