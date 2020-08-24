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
https://stackoverflow.com/questions/39543322/set-material-ui-tab-active-based-on-visited-route
TODOS:
Material UI DONE
Basic functionality TODO DONE 
local state DONE
props transfer DONE
Routes DONE
Redux DONE
Thunk and Saga
Hooks

extras:
form validation

*/
export default MainLayout;