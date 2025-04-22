import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-contents">
        <h2>Commandez votre nourriture préférée ici</h2>
        <p>
        Choisissez parmi un menu varié présentant une gamme délicieuse de plats 
        élaborés avec les meilleurs ingrédients et un savoir-faire culinaire. 
        Notre mission est de satisfaire vos envies et d'élever votre expérience culinaire 
        un délicieux repas à la fois.
        </p>
        <a href="#explore-menu">
          <button>Voir le menu</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
