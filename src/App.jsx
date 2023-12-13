import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notfound/NotFound";
import "./App.css";
import Signin from "./pages/signin/Signin";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";

// Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
