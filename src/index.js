import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Context/productContext";
import {FilterContextProvider} from "./Context/filter_context";
import { CartProvider } from "./Context/cart_context";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <Auth0Provider
    domain="dev-s7p5kqv4iy2jxku3.us.auth0.com"
    clientId="KkUzjFwbpKqpG6LSF0xt7vZ6zQ0PCYaH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <AppProvider>
         <FilterContextProvider>
            <CartProvider>
               <App />
            </CartProvider>
         </FilterContextProvider>
      </AppProvider>
   </Auth0Provider>
);


