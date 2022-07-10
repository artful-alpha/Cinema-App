import "./App.scss";
import Main from "./components/main";
import { Provider } from "react-redux";
import { store } from "./store";

/* eslint-disable */

// add node sass

/* eslint-enable */
import Header from "./components/Header";

function App() {
  /* eslint-disable */

  /* eslint-enable */
  return (
    <Provider store={store}>
      <div className='App'>
        <div className='wrapper'>
          <Header />
          <Main />
        </div>
      </div>
    </Provider>
  );
}

export default App;
