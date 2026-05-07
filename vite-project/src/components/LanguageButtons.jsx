export const LanguageButtons = ({ language, setLanguage, addToHistory }) => {
  const languages = ["English", "Spanish", "French", "Japanese", "Portuguese"];

  const handleLanguageClick = (lang) => {
    setLanguage(lang);
    addToHistory(lang);
  };

  return (
    <div className="language-buttons">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => handleLanguageClick(lang)}
          className={language === lang ? "active" : ""}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};
