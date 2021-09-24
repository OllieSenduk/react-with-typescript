import React, { useState } from "react";
import List from "./components/List";
import "./App.css";

function App() {
  // const [people, setPeople] = useState([
  //   {
  //     name: "jon",
  //     url: "",
  //     age: 36,
  //     note: "Best player ever",
  //   },
  //   {
  //     name: "jon",
  //     url: "",
  //     age: 36,
  //   },
  // ]);

  interface IState {
    people: {
      name: string;
      age: number;
      url: string;
      note?: string;
    }[];
  }

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "leBron James",
      url: "https://www.beestig.be/sites/default/files/styles/article_header/public/artikel/teaser_achtergrond/corgi_3.jpg?itok=uBF2Lm_g",
      age: 36,
      note: "Alergic to nuts",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to our party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
