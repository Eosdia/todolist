import styled from "styled-components";
import { MdAdd } from "react-icons/md";
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
  return (
    <TodoCreateBox>
      <InsertForm>
        <Input />
        <CircleBtn>
          <MdAdd />
        </CircleBtn>
      </InsertForm>
    </TodoCreateBox>
  );
}
export default TodoCreate;
