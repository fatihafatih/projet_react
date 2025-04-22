import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("S'inscrire");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt="cross_icon"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Se connecter" ? (
            <></>
          ) : (
            <input type="text" placeholder="Votre nom" required />
          )}
          <input type="email" placeholder="Votre email" required />
          <input type="password" placeholder="Mot de passe" required />
        </div>

        <button>
          {currentState === "S'inscrire" ? "Créer un compte" : "Se connecter"}
        </button>

        {currentState === "S'inscrire" ? (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>En continuant, j'accepte les conditions d'utilisation et la politique de confidentialité</p>
          </div>
        ) : (
          <></>
        )}

        {currentState === "Se connecter" ? (
          <p>
            Créer un nouveau compte ?
            <span onClick={() => setCurrentState("S'inscrire")}>Cliquez ici</span>
          </p>
        ) : (
          <p>
            Vous avez déjà un compte ?
            <span onClick={() => setCurrentState("Se connecter")}>Connectez-vous ici</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
/*
Ce composant est conçu pour afficher un formulaire modulaire
 qui permet à un utilisateur de choisir entre la connexion (Login) ou l'inscription (Sign up).
  En fonction de l'état (currentState), le formulaire ajuste les champs d'entrée et les actions disponibles. 
  Ce type de fenêtre popup est couramment utilisé dans
   les applications modernes pour simplifier l'expérience utilisateur d'inscription et de connexion.


Liens pour changer de mode : À la fin du formulaire, un lien apparaît selon l'état actuel :

Si l'utilisateur est dans la section "Sign up", il verra un lien pour passer à la section "Login" : "Already have an account? Login here".

Si l'utilisateur est dans la section "Login", il verra un lien pour passer à la section "Sign up" : "Create a new account? Click here".

Ces liens sont utilisés pour permettre à l'utilisateur de basculer entre la connexion et l'inscription.


*/