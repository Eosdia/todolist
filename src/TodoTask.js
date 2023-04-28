import styled from "styled-components";
import { useTodoState } from "./TodoContext";

const TodoTaskBlock = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(22, 113, 249, 1);
  div {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin-bottom: 5px;
  }
`;

function TodoTask() {
  const todos = useTodoState();
  const task = todos.filter((todo) => !todo.done);
  const done = todos.filter((todo) => todo.done);
  return (
    <TodoTaskBlock>
      <div>
        <h3>Task</h3>
        <div>{task.length}</div>
      </div>
      <div>
        <h3>Done</h3>
        <div>{done.length}</div>
      </div>
    </TodoTaskBlock>
  );
}
export default TodoTask;
