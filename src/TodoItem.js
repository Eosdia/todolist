import styled, { css } from "styled-components";
import { MdDoneOutline, MdDelete, MdCreate } from "react-icons/md";
import { useTodoDispatch } from "./TodoContext";
import { useState } from "react";

const Remove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-left: 8px;
  cursor: pointer;
  color: #dee2e6;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;
const Update = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-left: 8px;
  cursor: pointer;
  color: #dee2e6;
  &:hover {
    color: #8ab8fc;
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
    ${Update} {
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
function TodoItem({ id, done, text }) {
  const [update, setUpdate] = useState(false);
  const [updatetext, setUpdateText] = useState(text);
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });
  const onUpdate = () => {
    setUpdate(!update);
  };
  const onRevise = (event) => {
    setUpdateText(event.target.value);
  };
  const onReviseUpdate = () => {
    dispatch({ type: "UPDATE", id, text: updatetext });
    setUpdate(false);
  };
  return (
    <TodoItemBlock>
      <DoneCircle done={done} onClick={onToggle}>
        {done && <MdDoneOutline />}
      </DoneCircle>
      {update ? (
        <>
          <input value={updatetext} onChange={onRevise} />
          <button onClick={onReviseUpdate}>제출</button>
        </>
      ) : (
        <TodoText done={done}>{text}</TodoText>
      )}

      <Update onClick={onUpdate}>
        <MdCreate />
      </Update>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}
export default TodoItem;
