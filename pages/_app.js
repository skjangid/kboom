import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import styles from "../styles/Home.module.css";
import "../styles/main.css";

const MyApp = ({ Component, pageProps }) => {

  return (
    <div className={styles.container}>
      <div className={styles.App}>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
      </div>
    </div>
  );
};
export default MyApp;
