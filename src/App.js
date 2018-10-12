import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import ArticlesIndex from "./components/articles_index";
import ArticleNew from "./components/article_new";
import ArticleShow from "./components/article_show";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <p>
//            Edit <code>src/App.js</code> and save to reload.
//          </p>
//          <a
//            className="App-link"
//            href="https://reactjs.org"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            Learn React
//          </a>
//        </header>
         <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
            <div style={{paddingTop:50}}>
              <h1>Auto Articles</h1>
                <Switch>
                  <Route path="/article/new" component={ArticleNew} />
                  <Route path="/article/:id" component={ArticleShow} />
                  <Route path="/" component={ArticlesIndex} />
                </Switch>
              </div>
            </BrowserRouter>
         </Provider>        
//      </div>
    );
  }
}

export default App;
