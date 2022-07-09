import "./App.css";
/* eslint-disable */

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
/* eslint-enable */

function App() {
  return (
    <div className='App'>
      Hello
      <ul>
        <li>
          <a href=''>1</a>
        </li>
        <li>
          <a href=''>2</a>
        </li>
        <li>
          <a href=''>3</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
