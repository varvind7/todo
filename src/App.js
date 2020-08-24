import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from "./Components/ProtectedRoute";
import MainLayout from './Components/MainLayout/MainLayout';
import AddTodo from './Components/AddTodo/AddTodo';
import TodoList from './Components/TodoList/TodoList';
import NavBar from './Components/NavBar/NavBar';
import Login from './Components/Login/Login';
import { connect } from "react-redux";
function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <main>
      <NavBar/>
      <Switch>
      <ProtectedRoute
        exact
        path="/add"
        component={AddTodo}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
        <ProtectedRoute
        exact
        path="/"
        component={TodoList}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path='/login' component={Login}  exact/>
      {/* <Route path='/' component={TodoList}  exact/>  */}
      {/* <Route path='/' component={MainLayout} />      */}
      </Switch>
      {/* <MainLayout/> */}
    </main>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
export default connect(mapStateToProps)(App);
