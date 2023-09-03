import styled from "styled-components";

export const ClimaContainer = styled.div`
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom, #89cff0, #005c99);
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const InputCidade = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
`;

export const BotaoBuscar = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #005c99;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0070b3;
  }
`;

export const InfoClima = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
`;

export const PrevisaoContainer = styled.div`
  margin-top: 30px;

  h4 {
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
  }
`;
