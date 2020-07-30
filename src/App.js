import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from './Components/MainLayout/MainLayout';
import AddTodo from './Components/AddTodo/AddTodo';
import TodoList from './Components/TodoList/TodoList';
import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
    <main>
      
      {/* <Switch>
      
      <Route path='/add' component={AddTodo}  exact/>
      <Route path='/todos' component={TodoList}  exact/> 
      <Route path='/' component={MainLayout} />     
      </Switch> */}
      <MainLayout/>
    </main>
  );
}

export default App;
