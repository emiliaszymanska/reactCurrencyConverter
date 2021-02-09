import React from "react";

import "./CurrencyItem.css";

const CurrencyItem = (props) => {
  const {
    currencies,
    fromCurrency,
    toCurrency,
    onChangeFromCurrency,
    onChangeToCurrency,
    onChangeAmount,
    amount,
    calculatedAmount,
  } = props;

  let selectElements = currencies.map((currency) => (
    <option key={currency} value={currency}>
      {currency}
    </option>
  ));

  return (
    <div className="currency-item">
      <label htmlFor="input">Amount</label>
      <input
        id="input"
        className="input-field"
        type="number"
        defaultValue="1.0"
        onChange={onChangeAmount}
      />
      <div className="row-dropdown">
        <div className="dropdown-1">
          <label htmlFor="select-from-currency">From</label>
          <select
            id="select-from-currency"
            className="select"
            value={fromCurrency}
            onChange={onChangeFromCurrency}
          >
            {selectElements}
          </select>
        </div>
        <div className="dropdown-2">
          <label htmlFor="select-to-currency">To</label>
          <select
            id="select-to-currency"
            className="select"
            value={toCurrency}
            onChange={onChangeToCurrency}
          >
            {" "}
            {selectElements}
          </select>
        </div>
      </div>
      <div className="result">
        <span className="result from">
          {amount} {fromCurrency} ={" "}
        </span>{" "}
        <span className="result to">
          {calculatedAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
          {toCurrency}
        </span>
      </div>
    </div>
  );
};

export default CurrencyItem;
