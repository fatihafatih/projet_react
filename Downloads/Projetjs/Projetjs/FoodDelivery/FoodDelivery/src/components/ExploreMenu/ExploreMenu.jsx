import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Découvrez notre menu</h1>
      <p className="explore-menu-text">
      Choisissez parmi un menu varié proposant un délicieux éventail de plats. 
      Notre mission est de satisfaire vos envies et d'améliorer votre expérience culinaire
      un plat savoureux à la fois.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="explore-menu-list-item"                    //Quand l'utilisateur clique sur une catégorie :


              onClick={() =>                                        //Si elle est déjà sélectionnée (prev === item.menu_name), on réinitialise à "All".
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name   //Sinon, on définit la nouvelle catégorie.
                )
              } 
            >
              <img
                src={item.menu_image}
                className={category === item.menu_name ? "active" : ""}//Si une catégorie est sélectionnée,
                                                                       //  elle reçoit la classe CSS active pour la mettre en surbrillance.
                alt="menu_image"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
/*
Ce composant React affiche une section de menu interactif où l'utilisateur
 peut explorer différents types de plats (comme les entrées, desserts, boissons, etc.). 
 En cliquant sur une catégorie, elle est sélectionnée pour filtrer les plats ailleurs dans l'application.



menu_list	:Tableau contenant les catégories de plats
setCategory()	:Fonction pour mettre à jour la catégorie sélectionnée
Image cliquable:	Permet de sélectionner/désélectionner une catégorie
category	:La catégorie sélectionnée actuellement
Classe active	:Appliquée pour styliser la catégorie sélectionnée


*/