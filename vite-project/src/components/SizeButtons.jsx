export const SizeButtons = ({ fontSize, setFontSize }) => {
  const MIN_SIZE = 12;
  const MAX_SIZE = 72;

  const increaseSize = () => {
    if (fontSize < MAX_SIZE) {
      setFontSize(fontSize + 4);
    }
  };

  const decreaseSize = () => {
    if (fontSize > MIN_SIZE) {
      setFontSize(fontSize - 4);
    }
  };

  return (
    <div className="size-buttons">
      <button onClick={increaseSize}>Increase Size</button>
      <button onClick={decreaseSize}>Decrease Size</button>
    </div>
  );
};
