import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "containers/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}>
        {/* <Route index element={<Home></Home>}></Route> */}
      </Route>
    </Routes>
  );
}

export default App;
