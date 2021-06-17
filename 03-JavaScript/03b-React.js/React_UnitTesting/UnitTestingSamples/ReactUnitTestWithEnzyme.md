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


    Hi Carly, 

I found your website on the Love Your Doorstep directory and I really enjoyed looking at your portfolio. You seem fun and I like that you don't stage shots. I would like to enquire about your availability and services/fees. My partner and I are getting married on the 23 June 2021 at 2pm (a bit short notice!!) and would like to have a photographer to capture that special moment. It won't be a big wedding - it will just be in the Register Office in Enfield with about 8-10 people (including the bride and groom) for a few hours (possibly from 1pm to 3/4pm). 

I would love to get in touch with you and discuss further if you're free and would also like to work with me. My number is 07942326448. Thanks and hope to hear from you. 


Kind regards, 
Kristel