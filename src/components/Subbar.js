import React, { useState } from "react";
import "../styles/Subbar.css";
import Recettes from '../recettes.json';


export const Subbar = () => {
    const [input, characters] = useState("");

    const dataRecupe = (value) => {
        fetch('../recettes.json').then((response) => response.json()).then((json) => {
            const resultats = json.filter((val) => {
              return val.id && val.name && val.ingredients &&val.description.toLowercase().includes(value)
            })
        });
    };
    
//////////////////////////////////////////////////
    // const dataRecupe = Recettes.map(recette=>{
    //     return(
    //       <p>{recette}</p>
    //     )
    //   });
    // en faire une function ou transformer le fetch en map

    const parametrages = (value) => {
        characters(value)
        dataRecupe(value)
    };

    return <div classval="input">
        <input placeholder="Chercher une recette..." value={input} onChange={(e) => parametrages(e.target.value)}/>
    </div>;
};

export default Subbar;



