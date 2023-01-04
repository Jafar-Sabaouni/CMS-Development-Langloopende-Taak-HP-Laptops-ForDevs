import * as React from "react"
import LaptopsListItem from "./LaptopsListItem"
import laptopDataSort from "./laptopDataSort"
import laptopDataSearch from "./laptopsDataSearch"
import {
    ItemsContainer
} from "../pages/Laptops.module.css"




const LaptopsList = ({laptopData, sort, search }) => {
    if (search) {
        laptopData = laptopDataSearch(laptopData, search)
    }
    if (sort) {
        laptopData = laptopDataSort(laptopData, sort)
    }

    return (
        <div className={ItemsContainer}>
            {laptopData.map((item) => {
                return (<LaptopsListItem item={item} />)
            })}
        </div>
    )
}
export default LaptopsList;