import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "containers/Home";
import { Admin } from "containers/Admin";
import "@fontsource/roboto"; 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}>
        {/* <Route index element={<Home></Home>}></Route> */}
      </Route>
      <Route path="/admin" element={<Admin></Admin>}></Route>
    </Routes>
  );
}

export default App;
