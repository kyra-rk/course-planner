import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";
import DropdownSearch from "./DropdownSearch";
// import "../styles/search-bar.css";

function SearchBar(props) {
    const [inputText, setInputText] = useState("");
    const [course, setCourse] = useState("");
    let inputHandler = (e) => {
        console.log("input received");
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
  return (
    <div className="main">
      <h1>{props.title}</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} data={props.data}/>
    </div>
  );
}

export default SearchBar