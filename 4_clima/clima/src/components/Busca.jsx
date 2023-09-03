import React from "react";
import { BuscaContainer, InputCidade, BotaoBuscar } from "./BuscaStyles";

const Busca = ({ cidade, setCidade, buscarClima }) => {
  return (
    <BuscaContainer>
      <InputCidade
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Digite uma cidade"
      />
      <BotaoBuscar onClick={buscarClima}>Buscar</BotaoBuscar>
    </BuscaContainer>
  );
};

export default Busca;
