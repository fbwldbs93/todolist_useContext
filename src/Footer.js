import Button from "./Button";
function Footer({ isDark, setIsDark }) {
  return (
    <footer
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <div>
        <p>this is the footer</p>
        <Button isDark={isDark} setIsDark={setIsDark} />
      </div>
    </footer>
  );
}

export default Footer;
