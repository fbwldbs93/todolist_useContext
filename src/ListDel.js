import { useContext, useState } from "react";
import Button from "./Button";
import { ThemeContext } from "./context/ThemeContext";

function ListDel({ key, list, onDone, onDelete }) {
  const { isDark } = useContext(ThemeContext);
  return (
    <li
      key={key}
      style={{
        backgroundColor: isDark ? "#ddd" : "white",
      }}
    >
      <p>
        <del>{list}</del>
      </p>
      <button onClick={onDone}>done</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default ListDel;
