import styled from "styled-components";
import { MdAlarm } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";

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
  h1 {
    font-size: 70px;
    margin: 0;
  }
  h4,
  h5 {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 18px;
  }
`;

function TodoHead() {
  const today = new Date();
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const year = today.toLocaleDateString("en-US", { year: "numeric" });
  const month = today.toLocaleDateString("en-US", { month: "long" });
  const day = today.toLocaleDateString("en-US", { day: "2-digit" });
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  console.log(today.getHours());
  return (
    <TodoHeadBlock>
      <div className="day">
        <h1>{day}</h1>
        <div className="flex-container ">
          <h4>{month}</h4>
          <h5>{year}</h5>
        </div>
      </div>
      <div className="flex-container">
        <h2>Time Out</h2>
        <div className="time">
          <MdAlarm />
          {`${("0" + (23 - hours)).slice(-2)}:${("0" + (59 - minutes)).slice(
            -2
          )}:${("0" + (60 - seconds)).slice(-2)}`}
        </div>
      </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
