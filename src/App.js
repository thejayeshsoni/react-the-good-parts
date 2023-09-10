import React, { Suspense, lazy, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";

// chunking
// code splitting
// Dynamic Loading
// On Demand Loading (or Lazy Loading)
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // suppose there is a some code written for Authentication
  useEffect(() => {
    // make an API call and send userName and Password
    const data = {
      name: "thejayeshsoni",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      // Default value will be there if we don't provided any context
      <UserContext.Provider value={{ loggedInUser: userName }}>
        {/* wrapping our application with UserContext and value will take the values that we've passed in. */}
        <div className="app">
          <UserContext.Provider value={{ loggedInUser: "Jay Soni" }}>
            {/* But the Header component will only have the user context with passed values into it.  */}
            <Header />
          </UserContext.Provider>
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Another Bundle...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
