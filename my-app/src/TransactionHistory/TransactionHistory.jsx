import React from "react";
import PropTypes from 'prop-types';
import styles from "./styles.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.transaction_history}>
    <thead>
      <tr className={styles.heading}>
        <th className={styles.title}>Type</th>
        <th className={styles.title}>Amount</th>
        <th className={styles.title}>Currency</th>
      </tr>
    </thead>
    <tbody >
      {items.map((item) => (
        <tr className={styles.transaction_row} key={item.id} >
          <th className={styles.text} >{item.type}</th>
          <th className={styles.text} >{item.amount}</th>
          <th className={styles.text} >{item.currency}</th>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  itemss: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
export default TransactionHistory;
