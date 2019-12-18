import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import Head from "../components/Head";
import "../styles/style.scss";
import axios from "axios";
import getConfig from "next/config";

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <React.Fragment>
        <Head />
        <Provider store={reduxStore}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Provider>
      </React.Fragment>
    );
  }
}

export default withReduxStore(MyApp);
