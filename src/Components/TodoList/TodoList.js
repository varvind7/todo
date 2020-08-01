import React,{Component} from 'react';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux'; 
import { Grid, Card, CardContent, Box } from '@material-ui/core';
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

    render() {
        let todos = this.props.todos.map(todo => {
            return (
                // <Box display="inline" mx="auto" m={2}>
                        <Grid item>
                        <Card>
                            <CardContent>
                            <h2>{todo.heading}</h2>
                            <p>{todo.description}</p>
                            </CardContent>
                        </Card>
                        </Grid>
                // </Box>
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

export default connect(mapStateToProps,null)(TodoList);