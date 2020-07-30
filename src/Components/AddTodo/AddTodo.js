import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class AddTodo extends Component {
    state={
        heading:"",
        description:"",
        todos:[]
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

        let todos= [
            ...this.state.todos,
            {
                heading:this.state.heading,
                description:this.state.description
            }
            
        ]
        this.setState({todos:todos})
        console.log(this.state.todos);
    }
    handleChange= (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render() {
        return (
        <Grid direction="row" container justify="center" alignItems="center" >
        <Grid item xs={12}>
        <div>
                <h2>Add a new task</h2>
                <form onSubmit={this.handleSubmit}>
                <TextField id="outlined-basic" label="To do" name="heading" onChange={this.handleChange} value={this.state.heading} variant="outlined" />
                <br/> <br/>
                <TextField id="filled-textarea" rows={4} name="description" onChange={this.handleChange}  label="Description" value={this.state.description} multiline variant="outlined" />
                <br/><br/>
                <Button variant="outlined" type="submit" color="secondary">Add Todo</Button>
                </form>
            </div>
        </Grid>
        </Grid>
            
        )
    }
}

export default AddTodo;