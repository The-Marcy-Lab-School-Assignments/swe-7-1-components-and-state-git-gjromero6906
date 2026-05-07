export const ClickHistory = ({ history, clearHistory }) => {
  return (
    <div className="history-section">
      <h2>History</h2>
      {history.length === 0 ? (
        <p>No history yet</p>
      ) : (
        <ul>
          {history.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      )}
      <button onClick={clearHistory} className="clear-history-btn">
        Clear History
      </button>
    </div>
  );
};
