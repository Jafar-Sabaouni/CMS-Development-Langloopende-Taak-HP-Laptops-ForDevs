import React from 'react';
import { useState} from "react";
import {
  laptopSearch
} from "../pages/Laptops.module.css"

const LaptopSearchInput = ({ onClicked }) => {
    const [search, setSearch] = useState("");
  
    return (
      <div className={laptopSearch}>
        <input type="text" id="search" placeholder="search" onChange={(event) => { setSearch(event.target.value) }} value={search} />
        <button onClick={() => { onClicked(search)}}>search</button>
      </div>
    )
  }

export default LaptopSearchInput;