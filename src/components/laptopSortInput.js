import React from 'react';
import { useState, useEffect } from "react";
import {
    laptopSortInput
  } from "../pages/Laptops.module.css"
const LaptopSortInput = ({ onClicked }) => {
    const [sortValue, setSortValue] = useState(" ");
    useEffect(() => {
        onClicked(sortValue)
    }, [sortValue]);

    return (
        <select className={laptopSortInput} id="sort" name="sort" onChange={(event) => { setSortValue(event.target.value); }} value={sortValue}>
            <option value=" ">sort</option>
            <option value="price-lowToHigh">Price low to High</option>
            <option value="Price-HighToLow">Price High to low</option>
            <option value="storage">storage</option>
            <option value="ram">ram</option>
        </select>
    )
}
export default LaptopSortInput;