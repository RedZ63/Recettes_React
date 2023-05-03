import React, { useState } from "react";
import Meals from '../recettes.json';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Recettes.css";


const Recettes = () => {
  //stockage locale des donées
  const [searchTerm, setSearchTerm] = useState("");
  //condition pour la recherche
  const Res = Meals.filter((val) => {
    return val.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleSearch = (e) => {
    console.log(e.target.value);
    let value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div>
      <Header/>
      <div>
        <input
          className="input"
          type="text"
          name="RecetteBar"
          placeholder="découvrez nos recettes..."
          //évenement 
          onChange={handleSearch}
        />
      </div>

      {//condition erreur
        Res.length > 0 ? 
      //récupération de l'API
      (Res.map((Meal) => (
        <div className="container">
        
        <div className = "affichage" key={Meal.id}>
          <h1>{Meal.name}</h1>
          <img src={require(`../../public/img/images_recettes/${Meal.name}.jpg`)} />
          <p>{Meal.description}</p>

          {Meal.ingredients.map((donnees) => {
            return (
              <div key={Meal.id} >
                <p>{donnees.ingredient}</p>
                <p>{donnees.quantity}</p>
                <p>{donnees.unit}</p>
              </div>
            );
          })}
        </div>
        </div>

      )))
      // condition "else"
      : (<div id="erreur"><p >Aucune recette trouvée !</p></div>)

    }
      <Footer/>
    </div>
  );
};

export default Recettes;
