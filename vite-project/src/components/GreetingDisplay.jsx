export const GreetingDisplay = ({ language, fontSize }) => {
  const greetings = {
    English: "Good Morning",
    Spanish: "Buenos Días",
    French: "Bonjour",
    Japanese: "おはよう",
    Portuguese: "Bom Dia"
  };

  return (
    <h1 style={{ fontSize: `${fontSize}px` }} className="greeting">
      {greetings[language]}
    </h1>
  );
};
