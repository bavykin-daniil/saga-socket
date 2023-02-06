import React from "react";
import styles from "./styles.module.scss";

const Main = (props) => {
  return (
    <main data-testid="page-main" className={styles.main}>
      <div className="container">{props.children}</div>
    </main>
  );
};

export default Main;
