import React, { useState, useEffect } from "react";
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import "./App.css";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function App() {
  const [code, setCode] = useState(`function name(params) {
  return 1 + 1
}`);
  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/ai/code-review`, { code });
      setReview(res.data.response);
    } catch (err) {
      setReview("⚠️ Error fetching review. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    prism.highlightAll();
  }, [code, review]);

  return (
    <div className="container">
      <div className="pane left-pane">
        <div className="editor-header">Editor</div>
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
          padding={20}
          textareaId="code-editor"
          aria-label="Code Editor"
          className="code-editor"
          style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: 16,
          }}
        />
        <button
          className="review-button"
          onClick={reviewCode}
          disabled={loading}
        >
          {loading ? "Reviewing..." : "Review"}
        </button>
      </div>
      <div className="pane right-pane">
        <div className="editor-header">Review Output</div>
        <div className="markdown-output">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default App;
