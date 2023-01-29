// import logo from './logo.svg';
import "./App.css";
import { Provider } from "react-redux";
// import BookContainer from "./Components/bookContainer";
// import HookBookContainer from "./Components/hookBookContainer";
import store, { Persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./Routing/RouteList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <BrowserRouter>
          <RoutesList />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;

{
  /* <div className="App">
        <BookContainer />
        <HookBookContainer />
        <RoutesList />
      </div> */
}
