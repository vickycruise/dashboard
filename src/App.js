import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./route";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/demo1/style.css";
function App() {
  return <RouterProvider router={router} />;
}
export default App;
