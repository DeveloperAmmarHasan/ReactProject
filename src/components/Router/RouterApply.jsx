// App.jsx
import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github from "./components/Github/Github";
import { githubInfoLoader } from "./components/Github/Loader";

// Layout wrapper inside App
function Layout() {
  return (
    <div className="flex flex-col min-w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function RouterApply() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* default route "/" */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userid" element={<User />} />
        <Route path="github" loader={githubInfoLoader} element={<Github />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default RouterApply;
