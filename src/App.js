import List from "./list";
import data from "./data.js";
import "./App.css";
import { useState, useRef } from "react";

const INITIAL_DATA = data;

const App = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(INITIAL_DATA);
  const searchRef = useRef();
  const searchNode = searchRef.current;

  const onChange = (e) => {
    console.log(e.target.value);
    //console.log(e.target);
    setSearch(e.target.value);
  };

  const clickHandle = (e) => {
    e.preventDefault();
    //console.log(search);
    setResult(filteredList(search));
    console.log(result);
  };

  const resetHandle = () => {
    setResult(INITIAL_DATA);
    if (!searchNode) return;
    searchNode.value = "";
  };

  const filteredList = (term) =>
    data.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );

  return (
    <div className="App">
      <div className="search">
        <p>🔍 Search the technology!</p>
        <label htmlFor="search"></label>
        <input id="search" type="text" onChange={onChange} ref={searchRef} />
        <button className="btn-search" onClick={clickHandle}>
          Search
        </button>
        <button className="btn-reset" onClick={resetHandle}>
          Reset
        </button>
      </div>
      <div className="result-list">
        <List list={result} />
      </div>
    </div>
  );
};

export default App;
