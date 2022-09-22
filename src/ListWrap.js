import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import List from "./List";
import ListDel from "./ListDel";

function ListWrap({ list, onDone, onDelete, done }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <ul
      style={{
        backgroundColor: isDark ? "black" : "white",
      }}
    >
      {list.map((list, index) => {
        for (let i = 0; i < done.length; i++) {
          if (list == done[i]) {
            return (
              <ListDel
                key={index}
                list={list}
                onDone={() => onDone(index)}
                onDelete={() => onDelete(index)}
              />
            );
          }
        }
        return (
          <List
            key={index}
            list={list}
            onDone={() => onDone(index)}
            onDelete={() => onDelete(index)}
          />
        );
      })}
    </ul>
  );
}

export default ListWrap;
