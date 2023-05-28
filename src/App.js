import React, { useState } from "react";
import BarChart from "./component/BarChart.js";
import { UserData } from "./Data.js";
import LineChart from "./component/LineChart.js";
import PieChart from "./component/PieChart.js";
import "./App.css";

const App = () => {
  // to use chart js-- this is from documentation
  // taking data from data.js as a state
  const [userData, setUserData] = useState({
    // labels means the x axis numbers like in our case years-- 2020 etc
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        // its only label not lables, its the title/heading of our chart
        label: "Users Gained", //u can do similarly for users lost
        // this map is for y axis to show user gain
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["red", "yellow", "blue", "pink", "green"],
      },
    ],
  });

  return (
    <div className="container">
      <div style={{ width: 400 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 400 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 300 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
};

export default App;
