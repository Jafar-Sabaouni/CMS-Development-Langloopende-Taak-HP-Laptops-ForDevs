import * as React from "react";
import LaptopsRecomendationItemLight from "./LaptopsRecomendationItemLight";
import LaptopsRecomendationItemDark from "./LaptopsRecomendationItemDark"
import { RecomendationsContainer ,RecomendationsH2Light,RecomendationsH2Dark} from "../pages/Laptops.module.css";

const LaptopsList = ({ laptopData, LigtOrDarkMode }) => {
  return (
    <>
    {LigtOrDarkMode ? (
          <h2 className={RecomendationsH2Light}>Recomendations</h2>
        ) : (
            <h2 className={RecomendationsH2Dark}>Recomendations</h2>
        )}
    
    
    <div className={RecomendationsContainer}>
      {laptopData.map((item) => {
        return LigtOrDarkMode ? (
          <LaptopsRecomendationItemLight item={item} />
        ) : (
          <LaptopsRecomendationItemDark item={item} />
        );
      })}
    </div></>
  );
};

export default LaptopsList;