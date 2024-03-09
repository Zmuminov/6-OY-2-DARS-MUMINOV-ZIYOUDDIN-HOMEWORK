import React from "react";
import "./App.css";
import data from "./data/data.json";
import Card from "./components/Card";
function App() {
  return (
    <>
      <div className="container">
        <h1 className="MainTitle">𝓥𝓮𝓻𝔂 𝓔𝓪𝓻𝓵𝔂 𝓟𝓸𝓮𝓽𝓼 𝓟𝓪𝓰𝓮</h1>
        <div className="LastWrapper">
          {data.map((v, i) => {
            return <Card data={v} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
