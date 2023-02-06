import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { ReactComponent as UpArrowIcon } from "assets/icons/up-arrow-icon.svg";
import { ReactComponent as DownArrowIcon } from "assets/icons/down-arrow-icon.svg";

const ShareItem = ({ data }) => {
  const [raise, setRaise] = React.useState(false);

  React.useEffect(() => {
    setRaise(Math.random() >= 0.5);
  }, [raise, data]);

  const { ticker, exchange, price, change, change_percent } = data;

  return (
    <div className={styles.share}>
      <h4 className={styles.name}>{ticker}</h4>
      <span className={styles.exchange}>{exchange}</span>
      <span className={styles.price}>{price} $</span>
      <span
        className={cn(styles.change, raise ? styles.raise : styles.decrease)}
      >
        {`${change} $`} {raise ? <UpArrowIcon /> : <DownArrowIcon />}
      </span>
      <span
        className={cn(
          styles.change_percent,
          raise ? styles.raise : styles.decrease
        )}
      >
        {`${change_percent}%`}
      </span>
    </div>
  );
};

export default ShareItem;
