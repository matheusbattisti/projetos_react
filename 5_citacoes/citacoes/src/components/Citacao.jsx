import React, { useState, useEffect } from "react";

function Citacao({ texto, autor }) {
  const [traducao, setTraducao] = useState("");

  // Resetar a tradução quando o texto da citação mudar
  useEffect(() => {
    setTraducao("");
  }, [texto]);

  async function traduzirCitação(idioma) {
    try {
      const resposta = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
          q: texto,
          source: "pt",
          target: idioma,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await resposta.json();
      setTraducao(data.translatedText);
    } catch (erro) {
      console.error("Erro ao traduzir citação:", erro);
    }
  }

  return (
    <div>
      <blockquote className="blockquote">
        <p>{traducao ? traducao : texto}</p>
        <footer className="blockquote-footer">{autor}</footer>
      </blockquote>
      <button
        className="btn btn-primary m-1"
        onClick={() => traduzirCitação("en")}
      >
        Traduzir para Inglês
      </button>
      <button
        className="btn btn-secondary m-1"
        onClick={() => traduzirCitação("es")}
      >
        Traduzir para Espanhol
      </button>
    </div>
  );
}

export default Citacao;
