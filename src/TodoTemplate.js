import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 540px;
  height: 700px;
  border: 1px solid rgba(22, 113, 249, 1);
  border-radius: 16px;
  background: rgb(255, 255, 255);
  margin: 96px auto;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}
export default TodoTemplate;
