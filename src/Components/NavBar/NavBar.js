import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddTodo from '../AddTodo/AddTodo';
import Box from '@material-ui/core/Box';
import TodoList from '../TodoList/TodoList';
import { Link } from 'react-router-dom';

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

export default function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Tab label="TODO List" component={Link} to="/todos"  ></Tab>
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