import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// 生まれた日。多分、2001年9月19日 午前4時くらい。(時間が午前か午後か覚えてないので、違うかも。)
const birthTime = new Date(2001, 9 - 1, 19, 4, 0).getTime();

const ElapsedTime: React.FC<{}> = ({}) => {
  const [elapsed, setElapsed] = useState(new Date(Date.now() - birthTime));

  useEffect(() => {
    setInterval(() => {
      setElapsed(new Date(Date.now() - birthTime));
    }, 1000);
  }, []);

  return (
    <div>
      iamtakagi が生まれてから {elapsed.getFullYear() - 1970}年{" "}
      {elapsed.getMonth()}か月 {elapsed.getDate() - 1}日 {elapsed.getHours()}
      時間 {elapsed.getMinutes()}分 {elapsed.getSeconds()}秒 経過しました。
    </div>
  );
};

const App: React.FC<{}> = ({}) => (
  <div>
    <h1>lifetime</h1>
    <ElapsedTime />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
