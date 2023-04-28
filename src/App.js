import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import TodoTask from "./TodoTask";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`body{background:rgba(195, 234, 255, 0.5)}`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoCreate />
        <TodoList />
        <TodoTask />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
