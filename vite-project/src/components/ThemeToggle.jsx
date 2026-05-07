export const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const buttonText =
    theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {buttonText}
    </button>
  );
};
