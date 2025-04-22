import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>FOOD DELIVRY</h1>
          <p>
          Nous nous engageons à offrir une expérience exceptionnelle à nos clients
          en proposant des produits de qualité, un service irréprochable et une satisfaction garantie.
          Chez FOOD DELIVRY, nous croyons que chaque détail compte et nous mettons tout en œuvre pour répondre à vos besoins.
          Contactez-nous pour toute question ou demande, nous sommes là pour vous accompagner.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com">
              <img src={assets.facebook_icon} alt="facebook" />
            </a>
            <a href="https://www.twitter.com">
              <img src={assets.twitter_icon} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com">
              <img src={assets.linkedin_icon} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>ENTREPRISE</h2>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li>À propos de nous</li>
            <li>Livraison</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>ENTREZ EN CONTACT</h2>
          <ul>
            <li>+212 6 12 34 56 78</li>
            <li>contact@foodDelivry.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 ©foodDelivry .com</p>
    </footer>
  );
};

export default Footer;
