import React from "react";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header data-testid="page-header" className={styles.header}>
      <div className="container center">
        <h1 className={styles.title}>Finance board</h1>
      </div>
    </header>
  );
};

export default Header;
