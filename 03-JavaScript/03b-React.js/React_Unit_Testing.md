# React Testing

* **Arrange-Act-Assert** pattern can be applied to this as well

## React Component Testing Categories

1) **Rendering Component Trees**
  a) Simplified Test Environment and asserting the output
  b) Typically for Unit Testing
2) **Running a Complete App**
  a) In a realistic browser environment (E2E test)
  b) Typically for Integration and Regression Testing

## React Unit Testing

### Typical Tools

* **Test Runner**
  * Most recommended is **Jest** - lets you access the DOM via `jsdom`, mocking modules, and timers 
* **React Testing Library**
  * Set of Helpers for testing React Components without relying on the implementation details
  * Provides a way to shallowly render a component without its children

## Best Practise

### Recipes

More details can be found in [React Recipes](https://reactjs.org/docs/testing-recipes.html).

* **Setup/Teardown** - set up and clean up before and after test respectively

  ```
  import { unmountComponentAtNode } from "react-dom";

  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  ```
  
  * `beforeEach()` - render the React tree to a DOM element that's attached to a `document` so that it receives DOM events
  * `afterEach()` - unmount the tree from the `document`, even if the test fails to prevents "leaks" (i.e. changing the behaviour of another test)
* **`act()`**
  
  ```
  act(() => {
  // render components
  });
  // make assertions
  ```
  
  * A helper that is part of `react-dom/test-utils` to ensure all updates related to each "unit"
    * A "unit" of interaction with UI are tasks such as rendering, user events, or data fetching
* **Rendering**
  * Testing whether the component renders correctly for a given props
  ```
  // hello.test.js
  ...
  import { render, unmountComponentAtNode } from "react-dom";
  import { act } from "react-dom/test-utils";

  import Hello from "./hello";

  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    ...
  });

  afterEach(() => {
    // cleanup on exiting
    ...
  });

  it("renders with or without a name", () => {
    act(() => {
      render(<Hello />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");
  });
  ```
* **Data Fetching**
  * You can mock data fetching requests with dummy data
    * Not necessary to call the APIs in the tests
  * Also important to remove the mocks to ensure the tests are completely isolated
  ```
  it("renders user data", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User id="123" />, container);
  });

  expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
  expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
  expect(container.textContent).toContain(fakeUser.address);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
  ```
* **Mocking Modules**
  * Using dummy replacements for those modules that:
    * That might not work well inside the testing environment or
    * Might not be essential to the test itself
  ```
  // in your Component class
  import Map from "./map";
  
  export default function ComponentToTest(props) {
    ...
  }
  
  // in the test class, you want to Mock the "./map"
  ...
  jest.mock("./map", () => {
    return function DummyModule(props) {
      return (
        <div data-testid="map">
          {props.center.lat}:{props.center.long}
        </div>
      );
    };
  });
  ```
* **Events**
  * It is recommended to dispatch real DOM events on DOM elements and asserting the result
  * Different DOM events and their properties are described in [MDN - Mouse Event](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
  * You also need to pass `{ bubbles: true }` in each event you create for it to reach the React listener as React automatically delegates events to the root
  ```
  //toggle.js
  export default function Toggle(props) {
    ...
    return (
      <button
        onClick={() => {
          setState(previousState => !previousState);
          props.onChange(!state);
        }}
        data-testid="toggle"
      >
        {state === true ? "Turn off" : "Turn on"}
      </button>
    );
  }
  
  //toggle.test.js
  ...
  import { render, unmountComponentAtNode } from "react-dom";
  import { act } from "react-dom/test-utils";
  import Toggle from "./toggle";
  
  it("changes value when clicked", () => {
    const onChange = jest.fn();
    act(() => {
      render(<Toggle onChange={onChange} />, container);
    });

    // get ahold of the button element, and trigger some clicks on it
    const button = document.querySelector("[data-testid=toggle]");
    expect(button.innerHTML).toBe("Turn on");

    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe("Turn off");

    act(() => {
      for (let i = 0; i < 5; i++) {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    });

    expect(onChange).toHaveBeenCalledTimes(6);
    expect(button.innerHTML).toBe("Turn on");
  });
  
  ```
* **Timers**
  * If you're using `setTimeout()` to schedule more work in the future
    * This method calls a function or evaluates an expression after a specified number of millisecods 
      ```
      setTimeout(function(){ alert("Hello"); }, 3000);
      clearTimeout()      // use this to prevent this function from running
      ```
  * *Jest's Timer Mocks* can be used to write tests for this type of components
    * You can use fake timers `jest.useFakeTimers()` in some tests that does not require the timing
      * This means that the test does not actually have to wait "x" amount of hours to execute
    ```
    // card.js
    ...
    export default function Card(props) {
      useEffect(() => {
        const timeoutID = setTimeout(() => {
          props.onSelect(null);
        }, 5000);
        return () => {
          clearTimeout(timeoutID);
        };
      }, [props.onSelect]);
      ...
    }
    
    //card.test.js
    ...
    import { render, unmountComponentAtNode } from "react-dom";
    import { act } from "react-dom/test-utils";
    import Card from "./card";
    
    ...
    it("should select null after timing out", () => {
      const onSelect = jest.fn();
      act(() => {
        render(<Card onSelect={onSelect} />, container);
      });

      // move ahead in time by 100ms
      act(() => {
        jest.advanceTimersByTime(100);
      });
      expect(onSelect).not.toHaveBeenCalled();

      // and then move ahead by 5 seconds
      act(() => {
        jest.advanceTimersByTime(5000);
      });
      expect(onSelect).toHaveBeenCalledWith(null);
    });
    ```
* **Snapshot Testing**
  * This is for testing that the UI does not change unexpectedly
  * In Jest, you can use the following to save the rendered component output and ensure that a change is explicitly committed as a change to the snapshot
    * `toMatchSnapshot()`
    * `toMatchInlineSnapshot()`
  * It is better to make more specific assertions than use snapshots as snapshot testing includes implementation details and can break easilty
    * Mocking some child components can help reduce the size of snapshots and make them readable
  ```
  it("should render a greeting", () => {
    act(() => {
      render(<Hello />, container);
    });

    expect(
      pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */

    act(() => {
      render(<Hello name="Jenny" />, container);
    });

    expect(
      pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */

    act(() => {
      render(<Hello name="Margaret" />, container);
    });

    expect(
      pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */
  });
  ```
* **Multiple Renderers**
  * Used when testing a component that uses multiple renderers
    * e.g. Running a snapshot test on a component with `react-test-renderer` that internally uses `ReactDOM.render` inside a child component to render some content.
  * You then must wrap updates with `act()`s corresponding to their renderers
    ```
    import { act as domAct } from "react-dom/test-utils";
    import { act as testAct, create } from "react-test-renderer";
    // ...
    let root;
    domAct(() => {
      testAct(() => {
        root = create(<App />);
      });
    });
    expect(root).toMatchSnapshot();
    ```

### Environments

#### Jest

* **Setup**
