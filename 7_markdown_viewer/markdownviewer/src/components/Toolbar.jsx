import React from "react";

const Toolbar = ({ insertText }) => {
  return (
    <div className="toolbar">
      <button onClick={() => insertText("# ", "")}>H1</button>
      <button onClick={() => insertText("## ", "")}>H2</button>
      <button onClick={() => insertText("**", "**")}>Bold</button>
      <button onClick={() => insertText("*", "*")}>Italic</button>
      <button onClick={() => insertText("[", "](http://)")}>Link</button>
      <button onClick={() => insertText("```", "```")}>Code Block</button>
      <button onClick={() => insertText("- ", "")}>List Item</button>
      <button onClick={() => insertText("\n---\n", "")}>Horizontal Line</button>
    </div>
  );
};

export default Toolbar;
