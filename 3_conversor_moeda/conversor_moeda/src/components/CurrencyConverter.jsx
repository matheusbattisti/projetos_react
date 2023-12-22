import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CurrencyConverter.css";

const CurrencyConverter = () => {
  const [rates, setRates] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/348f1a00d0d92278c12411af/latest/USD"
      )
      .then((response) => {
        setRates(response.data.conversion_rates);
      })
      .catch((error) => {
        console.log("Erro ao obter dados da API", error);
      });
  }, []);

  useEffect(() => {
    if (rates) {
      const rateFrom = rates[fromCurrency] || 0;
      const rateTo = rates[toCurrency] || 0;
      setConvertedAmount(((amount / rateFrom) * rateTo).toFixed(2));
    }
  }, [amount, rates, fromCurrency, toCurrency]);

  if (!rates) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="converter">
      <h2>Conversor de Moedas</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <span>Selecione as moedas:</span>
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <span> para </span>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <h3>
        {convertedAmount} {toCurrency}
      </h3>
      <p>
        {amount} {fromCurrency} valem {convertedAmount} {toCurrency}
      </p>
    </div>
  );
};

export default CurrencyConverter;
