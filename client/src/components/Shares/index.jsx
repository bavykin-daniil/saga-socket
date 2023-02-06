import React from "react";
import { useSelector } from "react-redux";
import ShareList from "../ShareList";
import styles from "./styles.module.scss";

const Shares = () => {
  const { list, loading, error } = useSelector((state) => state.shares);

  return (
    <div className={styles.shares}>
      <span className={styles.title}>
        Maybe it will be interested for you ?
      </span>

      <ShareList list={list} loading={loading} error={error} />
    </div>
  );
};

export default Shares;
