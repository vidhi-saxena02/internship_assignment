import React from "react";
import Card from "./components/Card";
import { data } from "./constants/data";

const App = () => {
  return (
    <div>
      <Card data={data} />
    </div>
  );
};

export default App;
