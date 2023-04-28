import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { useNextId, useTodoDispatch } from "./TodoContext";
const TodoCreateBox = styled.div`
  width: 100%;
`;
const InsertForm = styled.form`
  padding: 20px 30px;
  display: flex;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 0;
  padding-left: 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  outline: none;
  margin-right: 15px;
`;
const CircleBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;
function TodoCreate() {
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextid = useNextId();
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault(); // 새로고침방지
    dispatch({
      type: "CREATE",
      todo: { id: nextid.current, text: value, done: false },
    });
    setValue("");
    nextid.current += 1;
  };
  return (
    <TodoCreateBox>
      <InsertForm onSubmit={onSubmit}>
        <Input value={value} onChange={onChange} />
        <CircleBtn>
          <MdAdd />
        </CircleBtn>
      </InsertForm>
    </TodoCreateBox>
  );
}
export default TodoCreate;
