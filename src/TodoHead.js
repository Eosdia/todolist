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
  .day {
    display: flex;
  }
  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h4,
  h5 {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
  }
`;

function TodoHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
  return (
    <TodoHeadBlock>
      <div className="day">
        <h1>27</h1>
        <div className="flex-container ">
          <h4>April</h4>
          <h5>{dayName}</h5>
        </div>
      </div>
      <div className="flex-container">
        <h2>Time Out</h2>
        <div className="time">
          <MdAlarm />
          16:24:38
        </div>
      </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
