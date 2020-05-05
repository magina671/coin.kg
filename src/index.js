import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./fonts/MPLUS1/MPLUS1p-Black.ttf";
import "./fonts/MPLUS1/MPLUS1p-Bold.ttf";
import "./fonts/MPLUS1/MPLUS1p-ExtraBold.ttf";
import "./fonts/MPLUS1/MPLUS1p-Light.ttf";
import "./fonts/MPLUS1/MPLUS1p-Medium.ttf";
import "./fonts/MPLUS1/MPLUS1p-Regular.ttf";
import "./fonts/MPLUS1/MPLUS1p-Thin.ttf";
import Spinner from "./components/spinner/spinner";

// import i18n (needs to be bundled ;))
import "./i18n";

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
