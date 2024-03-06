import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./page/Home";
import About from "./page/About";
import SingleUser from "./page/SingleUser";

const { Fragment } = require("react")

const App = () => {
  return (
    <Fragment>

      <Navigation />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about/" />
        <Route element={<SingleUser />} path="/about/:id" />
      </Routes>

    </Fragment>
  )
}

export default App;