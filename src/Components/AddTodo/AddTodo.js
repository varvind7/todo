import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';
class AddTodo extends Component {
    state={
        redirect:false,
        heading:"",
        description:"",
    }

    componentDidMount(){
        this.setState({redirect:false});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.heading);
        // console.log(this.state.description);
        // let todo = [
        //     {heading:this.state.heading,
        //     description:this.state.description
        //     }

        // ];

        // let todos= [
        //     ...this.state.todos,
        //     {
        //         heading:this.state.heading,
        //         description:this.state.description
        //     }
            
        // ];
        let todo = {
            heading:this.state.heading,
            description:this.state.description
        }
        this.props.onTodosAdded(todo);
        this.setState({redirect:true});
        console.log('Add Todos:',this.props.todos);
        //localStorage.setItem( 'Todos', "hello" );
        
    }
    handleChange= (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render() {

        if(this.state.redirect === true)
            return <Redirect to={{pathname:'/todos'}}/>;
        return (
            <Container maxWidth="sm">
        <Grid direction="row" container justify="center" alignItems="center" >
        <Grid item xs={12}>
        <div>
                <h2>Add a new task</h2>
                <form onSubmit={this.handleSubmit}>
                <TextField id="outlined-basic" label="To do" name="heading" onChange={this.handleChange} required value={this.state.heading} variant="outlined" />
                <br/> <br/>
                <TextField id="filled-textarea" rows={4} name="description" onChange={this.handleChange} required  label="Description" value={this.state.description} multiline variant="outlined" />
                <br/><br/>
                <Button variant="outlined" type="submit" color="secondary">Add Todo</Button>
                </form>
            </div>
        </Grid>
        </Grid>
        </Container>
            
        )
    }
}

const mapStateToProps = state => {
    return {
      todos: state.addTodo.todos  
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onTodosAdded: (todo) => dispatch(actions.addTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);