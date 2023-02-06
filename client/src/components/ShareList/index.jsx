import React from "react";
import styles from "./styles.module.scss";
import ShareItem from "../ShareItem";

const ShareList = ({ list = [], loading = false, error = null }) => {
  if (error) {
    return (
      <p data-testid="share-list-error" className="error">
        Error type: {error}. Please, reload the page. If you can still see an
        error, please, contact support
      </p>
    );
  }

  if (loading) {
    return <div data-testid="share-list-loader">Loading...</div>;
  }

  return (
    <ul className={styles.shares}>
      {list.map((item) => (
        <li key={item.ticker}>
          <ShareItem data={item} />
        </li>
      ))}
    </ul>
  );
};

export default ShareList;
