import styled from "styled-components";

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
  return (
    <TodoTaskBlock>
      <div>
        <h3>Task</h3>
        <div>3</div>
      </div>
      <div>
        <h3>Done</h3>
        <div>2</div>
      </div>
    </TodoTaskBlock>
  );
}
export default TodoTask;
