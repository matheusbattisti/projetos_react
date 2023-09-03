import React, { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import TextStyleConfig from "./TextStyleConfig";
import ImageUpload from "./ImageUpload";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const GeneratePDF = () => {
  const [title, setTitle] = useState(""); // Mudou de name para title
  const [description, setDescription] = useState(""); // Mudou de age para description
  const [fontSize, setFontSize] = useState("12");
  const [fontColor, setFontColor] = useState("#000000");
  const [isBold, setIsBold] = useState(false);
  const [image, setImage] = useState(null);

  const generatePDF = () => {
    const customStyle = {
      fontSize: parseInt(fontSize, 10),
      color: fontColor,
      bold: isBold,
    };

    const documentDefinition = {
      content: [
        { text: `Título: ${title}`, style: "customStyle" }, // Mudou de Nome para Título
        { text: `Descrição: ${description}`, style: "customStyle" }, // Mudou de Idade para Descrição
        image ? { image: image, width: 150 } : {},
      ],
      styles: {
        customStyle: customStyle,
      },
    };

    pdfMake.createPdf(documentDefinition).download();
  };

  return (
    <div className="container">
      <label className="label">
        Título: {/* Mudou de Nome para Título */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
      </label>
      <label className="label">
        Descrição: {/* Mudou de Idade para Descrição */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
        ></textarea>
      </label>
      <TextStyleConfig
        fontSize={fontSize}
        setFontSize={setFontSize}
        fontColor={fontColor}
        setFontColor={setFontColor}
        isBold={isBold}
        setIsBold={setIsBold}
      />
      <ImageUpload setImage={setImage} />
      <button onClick={generatePDF} className="button">
        Gerar PDF
      </button>
    </div>
  );
};

export default GeneratePDF;
