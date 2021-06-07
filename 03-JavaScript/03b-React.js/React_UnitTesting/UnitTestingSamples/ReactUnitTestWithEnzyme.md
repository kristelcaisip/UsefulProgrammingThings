# Unit Testing in React with Enzyme

* How do you test a UI?
    * UI = `pureFunction(state)`
        * UI is just a pure function of a state
        * In a React Component, `pureFunction()` is just a render
        * `pureFunction()` is given an input, you should get an output, which means you can predict the outcome 
* Shallow Rendering - limit only to testing the target component (without rendering its children)
    
    * In `shallow()` can pass in the React Component as a parameter and it will return a JQuery-like wrapper that wraps around this shallow render tree
    ```
    import { shallow } from 'enzyme';

    const wrapper = shallow(<ReactComponent />);
    ```