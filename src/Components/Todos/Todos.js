import React from 'react';
import { withRouter } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddTodo from '../AddTodo/AddTodo';
import Box from '@material-ui/core/Box';
import TodoList from '../TodoList/TodoList';

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
  

  handleCallToRouter = (value) => {
    this.props.history.push(value);
  }

  render() {

  
  return (
    <Paper square>
      <Tabs
        value={this.props.history.location.pathname}
        onChange={this.handleCallToRouter}
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
        centered
      >
        <Tab label="Add TODO" value='/add' >
          <div>
            <AddTodo/>
          </div>
        </Tab>
        <Tab label="TODO List" value='/todos' >
        <div>
            <TodoList/>
          </div>
        </Tab>
      </Tabs>
      </Paper>
      // <TabPanel value={value} index={0}>
      //   <AddTodo/>
      // </TabPanel>
      // <TabPanel value={value} index={1}>
      //   <TodoList/>
      // </TabPanel>
   
  );
  }
}

export default withRouter(NavBar);