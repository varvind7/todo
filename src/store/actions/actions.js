import * as actionTypes from './actionTypes';
import axios from 'axios';
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
};

export const getTodosSuccess = (res) => {
    let todos = res.data.splice(0,20)
   // console.log(todos);
    let todos1 = todos.map( todo => {
        return {
            heading: todo.title,
            description: 'Completed Status:' + todo.completed
        };
    });
    console.log(todos1);

    return {
        type:actionTypes.GET_TODOS_SUCCESS,
        res:todos1
    }
}

export const getTodosFailed = (err) => {

    return {
        type:actionTypes.GET_TODOS_FAIL,
        err:err
    }
}


export const getTodos = () => {

    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
           // console.log(res);
           dispatch(getTodosSuccess(res));

        }).catch(err => {
            dispatch(getTodosFailed(err));
        })
    }
}
