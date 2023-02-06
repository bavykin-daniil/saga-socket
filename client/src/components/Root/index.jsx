import React from "react";
import Main from "../Main";
import Header from "../Header";
import Home from "../../pages/Home";

import styles from "./styles.module.scss";

const Root = () => {
  return (
    <div className={styles.root}>
      <Header />

      <Main>
        <Home />
      </Main>
    </div>
  );
};

export default Root;
