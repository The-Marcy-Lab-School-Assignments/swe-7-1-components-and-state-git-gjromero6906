import { useState } from 'react'
import './App.css'
import { SizeButtons } from './components/SizeButtons'
import { GreetingDisplay } from './components/GreetingDisplay'
import { LanguageButtons } from './components/LanguageButtons'
import { ThemeToggle } from './components/ThemeToggle'
import { ClickHistory } from './components/ClickHistory'

export const App = () => {
  const [language, setLanguage] = useState("English");
  const [fontSize, setFontSize] = useState(24);
  const [theme, setTheme] = useState("light");
  const [history, setHistory] = useState([]);

  const addToHistory = (lang) => {
    const newHistory = [lang, ...history];
    if (newHistory.length > 5) {
      newHistory.pop();
    }
    setHistory(newHistory);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        
        <SizeButtons fontSize={fontSize} setFontSize={setFontSize} />

        <GreetingDisplay language={language} fontSize={fontSize} />

        <LanguageButtons
          language={language}
          setLanguage={setLanguage}
          addToHistory={addToHistory}
        />

        <ClickHistory history={history} clearHistory={clearHistory} />
      </div>
    </div>
  );
};

export default App
