import styled, { css } from "styled-components";
import { MdDoneOutline, MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  color: #dee2e6;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 20px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const DoneCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #1671f9;
      color: #1671f9;
    `}
`;
const TodoText = styled.div`
  flex: 1;
  font-size: 20px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
function TodoItem({ done, text }) {
  return (
    <TodoItemBlock>
      <DoneCircle done={done}>{done && <MdDoneOutline />}</DoneCircle>
      <TodoText done={done}>{text}</TodoText>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}
export default TodoItem;
