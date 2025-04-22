import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);//Je vais chercher une variable appelée food_list
                                               //  qui se trouve dans un "contexte global" nommé StoreContext.
                                               //StoreContext ?
//C’est un contexte React.
//Il sert à partager des données entre plusieurs composants sans devoir les passer manuellement à chaque fois avec les props.
  return (
    <div className="food-display" id="food-display">
      <h2>Les Meilleurs Plats Près de Chez Vous</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {// Filtrage : on affiche uniquement les plats de la 
                                                                 // catégorie sélectionnée, ou tous si "All" est choisi.
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
