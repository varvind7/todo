import * as actionTypes from './actionTypes';

export const addTodo = (todo) => {
    return {
        type: actionTypes.ADD_TODO,
        todo:todo
    };
};

export const deleteTodo = (index) => {
    return {
        type: actionTypes.DELETE_TODO,
        index: index
    }
}

