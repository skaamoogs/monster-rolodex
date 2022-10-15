import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import { useEffect, useState } from "react";

function App() {
  console.log("app render");
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    console.log("effect fired");
    const getMonsters = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setMonsters(json);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMonsters();
  }, []);

  const onChangeHandler = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField)
  );

  return (
    <div className="App">
      <h1 className="title">Monster Rolodex</h1>
      <SearchBox
        placeholder="search monsters"
        onChangeHandler={onChangeHandler}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
