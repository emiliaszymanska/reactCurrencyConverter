import React, { useState, useEffect } from "react";
import CurrencyItem from "./CurrencyItem";

const URL = "https://api.exchangeratesapi.io/latest";

const CurrencyItems = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [rate, setRate] = useState();
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        const firstElement = Object.keys(data.rates)[0];
        setCurrencies([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstElement);
        setRate(data.rates[firstElement]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => setRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  let calculatedAmount = amount * rate;

  let content = <p>Loading...</p>;
  if (currencies && currencies.length > 0) {
    content = (
      <React.Fragment>
        <CurrencyItem
          currencies={currencies}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          onChangeFromCurrency={(e) => setFromCurrency(e.target.value)}
          onChangeToCurrency={(e) => setToCurrency(e.target.value)}
          onChangeAmount={(e) => setAmount(e.target.value)}
          amount={amount}
          calculatedAmount={calculatedAmount}
        />
      </React.Fragment>
    );
  }
  return content;
};

export default CurrencyItems;
