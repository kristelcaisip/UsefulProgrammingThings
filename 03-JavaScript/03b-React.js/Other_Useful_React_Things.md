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

---

# react-router

## withRouter()

* [More Info](https://reactrouter.com/web/api/withRouter)
* Example Usage:
    * Header Component (to update the contents based on some conditions)
    
        ```
        import React, { Component } from 'react';
        import { Link } from 'react-router-dom';
        import AuthenticationService from './AuthenticationService.js';
        import { withRouter } from 'react-router';

        class HeaderComponent extends Component {
            render() {
                const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
                console.log("User Logged in?" + isUserLoggedIn);
                return (
                    <div>
                        <header>
                            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                                <div><a className="navbar-brand">My Company</a></div>
                                <ul className="navbar-nav">
                                    {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/kristel">Home</Link></li>}
                                    {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                                </ul>
                                <ul className="navbar-nav navbar-collapse justify-content-end">
                                    {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                                    {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                                </ul>
                            </nav>
                        </header>
                    </div>
                )
            }
        }

        export default withRouter(HeaderComponent);
        ```
---

# Full Calendar

* [Official Website](https://fullcalendar.io/)
* [Tutorial](https://www.newline.co/@dmitryrogozhny/how-to-add-month,-week,-or-day-calendar-in-react-with-fullcalendar--7e10e8cf)

## Troubleshooting

* `Can't resolve ˆ'@fullcalendar/core/main.css'`
    * In your projects `node-modules` folder, look for **@fullcalendar/common** module and then copy the `main.css` and copy into **@fullcalendar/core**

---

# Axios

* A [library](https://github.com/axios/axios) that helps us make http requests to external resources
* Allows for asynchronous calls (Promise)
    * **Promise** eventual completion (or failure) of an asynchronous operation
    ```javascript
    asyncCallWithPromise().then (response => doWhat(response))
                          .catch (error => handleError(reponse))
    ```
* You can use all the HTTP methods `GET`, `POST`, `PUT`, `DELETE`. `OPTIONS`, `REQUEST`, `HEAD`, and `PATCH`
* The response contains the following:
    * `data: {}` - response provided by the server
    * `status: 200` - the HTTP Status code from the server response
    * `statusText: 'OK'` - the HTTP Status message from the server response
    * `headers: {}` - the headers that the server responded with; al headers name
    * `config: {}` - is the config that provided to axios for the request
    * `request` - is the request that generated this response; it is the last ClientRequest instance in node.js (in redirects) and an XMLHttpRequest instance the browser

## Usage

* Add `axios` into your project
```
$ npm add axios
```