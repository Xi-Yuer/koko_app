import { Provider } from "react-redux";

import "./app.scss";
import store from "./store";

function App(props: any) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}

export default App;
