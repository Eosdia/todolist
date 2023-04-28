import styled from "styled-components";
import { MdAlarm } from "react-icons/md";

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 18px;
  border-bottom: 1px solid rgba(22, 113, 249, 1);
  div {
    margin: 0 auto;
  }
  .time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <div className="day">
        <h1>27</h1>
      </div>
      <div className="time">
        <h2>Time Out</h2>
        <div>
          <MdAlarm />
          16:24:38
        </div>
      </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
