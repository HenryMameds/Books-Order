import {
  BrowserRouter,
} from "react-router-dom";

import './index.css'; 

import Navigation from "./Global/Modules/Navigation";

const App = () => {
  return (
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
  );
};

export default App;
