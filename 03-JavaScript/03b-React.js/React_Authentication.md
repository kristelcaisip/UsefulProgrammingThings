# React Authentication

## Session Storage

* You can see this on Google Developer Tool > Inspect > Application > Storage
* In React, you can store and remove this using: 

    ```
    // store
    sessionStorage.setItem('[KEY_OF_ITEM]', [VALUE_OF_ITEM])

    // remove
    sessionStorage.removeItem('[KEY_OF_ITEM]')
    ```

## Authenticated Route

* You can disable access or routing to another view by creating a new component called `AuthenticatedRoute`

    ```
    import React, { Component } from 'react';
    import AuthenticationService from './AuthenticationService';
    import { Route, Redirect } from 'react-router-dom';


    class AuthenticatedRoute extends Component {
        render() {

            // Pass to the route if the user is logged in using the spread operator
            if(AuthenticationService.isUserLoggedIn()) {
                return <Route {...this.props} />
            }
            else {
                return <Redirect to="/login" />
            }
        }
    }

    export default AuthenticatedRoute;
    ```
* Then update the Routes to use this new Class Component so that it forwards it there.

    ```
    <Switch>
        {/*<Route path="" exact component={LoginComponent} />*/}
        <Route path="/login" component={LoginComponent} />
        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
        <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
        <AuthenticatedRoute path="/logout" component={LogoutComponent} />
        <Route component={ErrorComponent} />
    </Switch>
    ```