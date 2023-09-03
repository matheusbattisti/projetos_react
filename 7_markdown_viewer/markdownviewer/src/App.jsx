import React, { useState, useEffect, useRef } from "react";
import { marked } from "marked";
import Toolbar from "./components/Toolbar";

const App = () => {
  const [text, setText] = useState(
    localStorage.getItem("markdownText") || "# Hello, Markdown!"
  );
  const textAreaRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("markdownText", text);
  }, [text]);

  const insertText = (before, after) => {
    const textArea = textAreaRef.current;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const previousText = textArea.value;
    const beforeText = previousText.substring(0, start);
    const selectedText = previousText.substring(start, end);
    const afterText = previousText.substring(end);

    const newText = `${beforeText}${before}${selectedText}${after}${afterText}`;
    setText(newText);
    textArea.focus();
  };

  const renderText = () => {
    return { __html: marked(text) };
  };

  return (
    <div className="app-container">
      <Toolbar insertText={insertText} />
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div dangerouslySetInnerHTML={renderText()} />
    </div>
  );
};

export default App;
