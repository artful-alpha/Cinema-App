import "./App.scss";
  /* eslint-disable */
import Main from "./components/main";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";

import Header from "./components/Header";


function App() {
   


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
