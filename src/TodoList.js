import { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import Footer from "./Footer";
import ListWrap from "./ListWrap";
import { ThemeContext } from "./context/ThemeContext";

function TodoList() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("todolist");
      if (saved) {
        return JSON.parse(saved);
      } else {
        return [""];
      }
    }
  });
  const [done, setDone] = useState([]);
  const [isDark, setIsDark] = useState(false);

  const todolist = "todolist";

  useEffect(() => {
    localStorage.setItem(todolist, JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const localData = localStorage.getItem(todolist);
    const data = JSON.parse(localData);
    if (localData !== null) {
      setList(data);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (input == "") {
      return;
    }
    setList((currentArr) => (currentArr = [input, ...currentArr]));
    localStorage.setItem(todolist, JSON.stringify(list));

    console.log("list in submit", list);
    setInput("");
  };
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onDelete = (index) => {
    const removeList = list.filter((item, listIndex) => {
      return listIndex !== index;
      //index 가 같지 않은 걸 뺀 배열을 출력
    });
    setList(removeList);
    localStorage.setItem(todolist, JSON.stringify(list));
  };

  const onDone = (index) => {
    const doneList = list.filter((list, listIndex) => {
      return listIndex == index;
      //index 가 같은 배열을 출력?

      //list 의 배열 index와 선택한 요소의 index 비교
      //done[arr, ...curArr]
      //done 배열을 돌려서 list 의 배열과 비교해서 같은게 있으면 적용인데
      //문제는 무조건 같기만 하면 적용해버리는 문제점..
      //근데 toDo 리스트니까 상관없지 않을까..? 일단 진행해
    });

    setDone((currentArr) => [doneList, ...currentArr]);
  };

  return (
    <div className="todolist-wrap">
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Form onSubmit={onSubmit} input={input} onChange={onChange} />
        <ListWrap list={list} onDelete={onDelete} onDone={onDone} done={done} />
        <Footer isDark={isDark} setIsDark={setIsDark} />
      </ThemeContext.Provider>
    </div>
  );
}

export default TodoList;
