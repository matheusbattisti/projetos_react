import React from "react";
import { Container, Typography } from "@mui/material";

const TaxReport = ({ taxData }) => {
  return (
    <Container>
      <Typography variant="h5">Relatório de Impostos</Typography>
      <Typography variant="body1">Nome: {taxData.name}</Typography>
      <Typography variant="body1">Idade: {taxData.age}</Typography>
      <Typography variant="body1">Renda: {taxData.income}</Typography>
      <Typography variant="body1">Imposto a Pagar: {taxData.tax}</Typography>
    </Container>
  );
};

export default TaxReport;
