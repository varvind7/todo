import React,{Component} from 'react';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux'; 
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid, Card, CardContent, Box } from '@material-ui/core';
import * as actions from '../../store/actions/actions';
class TodoList extends Component {
    // state={
    //     todos:[]
    // }

    // componentDidMount()
    // {
    //     if(this.props.location.state!=undefined)
    //     {
    //     let todos = this.state.todos;
    //     let todo = this.props.location.state.todos;
    //     console.log('didmount todo',todo);
    //     todos.push(todo);
    //     this.setState(({todos:todos}));
    //     console.log('didmount todos',this.state.todos);
    //     }
    // }

    deleteHandler = (index) => {
        alert(index);
    }

    render() {
        let todos = this.props.todos.map((todo,index) => {
            return (
                // <Box display="inline" mx="auto" m={2}>
                        <Grid key={index} item>
                        <Card>
                            <CardContent>
                            <Grid alignItems="center" justify="center" container spacing={10}>
                                <Grid  item>
                                    <h2>{todo.heading}</h2>
                                    <p>{todo.description}</p>
                                </Grid>
                                <Grid  item >
                                    <IconButton onClick={()=>this.props.onTodoDelete(index)} aria-label="delete">
                                        <DeleteIcon />
                                        </IconButton>
                                </Grid>
                            </Grid>
                            </CardContent>
                        </Card>
                        </Grid>
                // </Box> style={{marginTop:'20px'}}
            );
        })
        return (
            <Container maxWidth="sm">
                 <div>
                <h2>List of Todos</h2>
                <Grid  direction="column" container spacing={3}>
                {todos}
                </Grid>
                {/* {console.log('todos',todos)} */}
                {/* {console.log('Todos:',this.props.location.state.todos)} */}
            </div>
            </Container>
           
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos:state.addTodo.todos
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onTodoDelete: (index) => dispatch(actions.deleteTodo(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);