import React, { useState, useEffect } from "react";
import axios from "axios";

import ClimaAtual from "./components/ClimaAtual";
import Previsao from "./components/Previsao";
import Busca from "./components/Busca";

import { ClimaContainer, Titulo } from "./AppStyles";

const App = () => {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY || "";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const resposta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      setCidade(resposta.data.name);
      setClima(resposta.data);
    });
  }, [apiKey]);

  const buscarClima = async () => {
    try {
      const respostaClima = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      const respostaPrevisao = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      respostaClima.data.main.temp = (respostaClima.data.main.temp - 32) * (5 / 9);

      setClima(respostaClima.data);
      setPrevisao(respostaPrevisao.data.list.slice(0, 5)); // Obter as 5 primeiras previsões
    } catch (error) {
      console.error("Erro ao buscar dados do clima:", error);
    }
  };

  return (
    <ClimaContainer>
      <Titulo>Condições Climáticas</Titulo>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      {clima && <ClimaAtual clima={clima} />}
      {previsao.length > 0 && <Previsao previsoes={previsao} />}
    </ClimaContainer>
  );
};

export default App;
