import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./TodoList";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
