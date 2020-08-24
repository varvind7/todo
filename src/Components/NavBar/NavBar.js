import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddTodo from '../AddTodo/AddTodo';
import Box from '@material-ui/core/Box';
import TodoList from '../TodoList/TodoList';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/';
import { connect } from 'react-redux';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div>
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}
class NavBar extends React.Component {
  state= {
    value:1
  }
 setValue=(newValue) => {
    this.setState({value:newValue});
  }
  render()
  {

  const value = this.state.value

  const handleChange = (event, newValue) => {
    this.setValue(newValue);
  };
  let logoutText=this.props.isAuthenticated?'Logout':'Login';

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        centered
      >
       
        <Tab label="Add TODO" component={Link} to="/add"  ></Tab>
        <Tab label="TODO List" component={Link} to="/"  ></Tab>
        <Tab label={logoutText} onClick={this.props.onLogout}></Tab>
      </Tabs>
      {/* <TabPanel value={value} index={0}>
        <AddTodo/>
      </TabPanel>
       <TabPanel value={value} index={1}>
        <TodoList/>
      </TabPanel> */}
    </Paper>
  );
}
}
function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
   
  };
}
const mapDispatchToProps = dispatch => {
  return {
      onLogout: ()=>dispatch(actions.logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);