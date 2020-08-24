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
        case actionTypes.DELETE_TODO:
            return {
                ...state,
                todos:state.todos.filter((todo,index)=> index !== action.index)
            }
        case actionTypes.GET_TODOS_SUCCESS:
            //console.log(action.res);
            return {
                ...state,
                todos: [...action.res]
            }
        case actionTypes.GET_TODOS_FAIL:
            console.log(action.err);
            return state;

            default:
            return state;
        
        
    }
 
}

export default reducer;