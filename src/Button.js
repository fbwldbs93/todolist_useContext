function Button({ isDark, setIsDark }) {
  const setButton = () => {
    setIsDark(!isDark);
  };
  return (
    <button className="dark-button" onClick={setButton}>
      DarkMode
    </button>
  );
}

export default Button;
