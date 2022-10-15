import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import { ChangeEvent, useEffect, useState } from "react";
import { getData } from "./utils/fetch.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

function App() {
  console.log("app render");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const getMonsters = async () => {
      const monsters = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(monsters);
    };
    getMonsters();
  }, []);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
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
