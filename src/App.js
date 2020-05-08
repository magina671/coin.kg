import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/404";
import Registration from "./components/registration";
import Autorization from "./components/autorization";
import Home from "./components/home";
import CreditInfo from "./components/pages/credit-info";
import AboutUs from "./components/pages/about-us";
import Footer from "./components/footer";
import OnlineRequest from "./components/pages/online-request";
import AllNews from "./components/news/all-news/all-news";
import OneNewsPage from "./components/news/one-news-page";
import SuccessStoryPage from "./components/pages/success-story";

function App() {
  return (
    <Router>
      <div className="app_wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/registration" component={Registration} />
          <Route path="/autorization" component={Autorization} />
          <Route path="/credit/:id" component={CreditInfo} />
          <Route path="/about_us" component={AboutUs} />
          <Route path="/all_news" component={AllNews} />
          <Route path="/online_request" component={OnlineRequest} />
          <Route path="/one_news/:id" component={OneNewsPage} />
          <Route path="/success_story" component={SuccessStoryPage} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
