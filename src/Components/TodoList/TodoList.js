import React,{Component} from 'react';
import Container from '@material-ui/core/Container';
class TodoList extends Component {
    state={
        todos:[]
    }

    componentDidMount()
    {
        if(this.props.location.state!=undefined)
        {
        let todos = this.state.todos;
        let todo = this.props.location.state.todos;
        console.log('didmount todo',todo);
        todos.push(todo);
        this.setState(({todos:todos}));
        console.log('didmount todos',this.state.todos);
        }
    }

    render() {
        let todos = this.state.todos.map(todo => {
            return (
                <div>
                    <p>{todo[0].heading}</p>
                    <p>{todo[0].description}</p>
                </div>
            );
        })
        return (
            <Container maxWidth="sm">
                 <div>
                <h2>List of Todos</h2>
                {todos}
                {/* {console.log('todos',todos)} */}
                {/* {console.log('Todos:',this.props.location.state.todos)} */}
            </div>
            </Container>
           
        )
    }
}

export default TodoList;