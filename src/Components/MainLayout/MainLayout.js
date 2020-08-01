import React from 'react';
import Container from '@material-ui/core/Container';

import NavBar from '../NavBar/NavBar';
import AddTodo from '../AddTodo/AddTodo';
const MainLayout = () => {
    return (
        <div>
            <Container maxWidth="sm">
                <NavBar/>
            </Container>

        </div>

    );
};
/*
TODOS:
Material UI DONE
Basic functionality TODO DONE 
local state DONE
props transfer DONE
Routes DONE
Redux
Thunk and Saga
Hooks

extras:
form validation

*/
export default MainLayout;