import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import layout
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";

// import page
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import MyPosts from "./components/MyPosts";
import ShowProduct from "./components/ShowProduct/ShowProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index Component={HomePage} />
          <Route path="/about" Component={AboutUs} />
          <Route path="/posts" Component={MyPosts} />
          <Route path="/posts/:id" Component={ShowProduct} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
