const TextStyleConfig = ({
  fontSize,
  setFontSize,
  fontColor,
  setFontColor,
  isBold,
  setIsBold,
}) => {
  return (
    <div className="textStyleConfig">
      <label className="configLabel">
        Font Size:
        <input
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="input"
        />
      </label>
      <label className="configLabel">
        Font Color:
        <input
          type="color"
          value={fontColor}
          onChange={(e) => setFontColor(e.target.value)}
          className="colorPicker"
        />
      </label>
      <label className="configLabel">
        Bold:
        <input
          type="checkbox"
          checked={isBold}
          onChange={(e) => setIsBold(e.target.checked)}
        />
      </label>
    </div>
  );
};

export default TextStyleConfig;
