import React, { useState } from 'react';

function Translator() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [history, setHistory] = useState([]);
  const [languages, setLanguages] = useState({
    from: 'English',
    to: 'Hindi',
  });

  const handleTranslate = () => {
    const translatedText = `Translation of "${inputText}" in ${languages.to}...`;
    setOutputText(translatedText);

    // Update history
    setHistory([...history, { input: inputText, output: translatedText }]);
  };

  const handleSwapLanguages = () => {
    setLanguages((prevLanguages) => ({
      from: prevLanguages.to,
      to: prevLanguages.from,
    }));
  };

  return (
    <div className="translator-page">
      <div className="translator-container glass-effect">
        <h2 className="translator-title">Language Translator</h2>
        
        {/* Language Selection */}
        <div className="language-selection">
          <div className="language-from">
            <img
              src="https://flagcdn.com/40x30/gb.png"
              alt="English Flag"
              className="flag-icon"
            />
            <p>From</p>
            <p className="language-name">{languages.from}</p>
          </div>
          <div className="language-swap">
            <button className="swap-btn" onClick={handleSwapLanguages}>⇆</button>
          </div>
          <div className="language-to">
            <img
              src="https://flagcdn.com/40x30/in.png"
              alt="India Flag"
              className="flag-icon"
            />
            <p>To</p>
            <p className="language-name">{languages.to}</p>
          </div>
        </div>

        {/* Input and Output */}
        <div className="input-output-container">
          <div className="input-section">
            <label>Input ({languages.from})</label>
            <textarea
              placeholder={`Type your text in ${languages.from}...`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="text-area"
            />
          </div>

          <div className="output-section">
            <label>Output ({languages.to})</label>
            <textarea
              placeholder={`Translation will appear here in ${languages.to}...`}
              value={outputText}
              readOnly
              className="text-area"
            />
          </div>
        </div>

        {/* Translate Button */}
        <button onClick={handleTranslate} className="translate-btn">
          Translate
        </button>

        {/* Translation History */}
        <div className="translation-history">
          <h3>Translation History</h3>
          <ul>
            {history.length > 0 ? (
              history.map((item, index) => (
                <li key={index}>
                  <strong>Input:</strong> {item.input} <br />
                  <strong>Output:</strong> {item.output}
                </li>
              ))
            ) : (
              <p>No history available yet.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Translator;
