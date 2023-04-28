import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  padding: 10px 32px;
  flex: 1;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem done={true} text="ui 구상하기" />
      <TodoItem done={false} text="운동하기" />
      <TodoItem done={true} text="리액트 만들기" />
    </TodoListBlock>
  );
}
export default TodoList;
