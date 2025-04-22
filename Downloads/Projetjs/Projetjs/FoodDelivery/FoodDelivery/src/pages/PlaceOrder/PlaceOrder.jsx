import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";
import { deliveryFee } from "../Cart/Cart";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
      
    e.preventDefault();

    const totalAmount = getTotalCartAmount() + deliveryFee;

    const allFieldsFilled = Object.values(formData).every(
      (field) => field !== null && field !== ""
    );

    try {
      const response = await fetch("http://localhost:3000/order");
        

      const data = await response.json();
      console.log(data);

      if (allFieldsFilled) {
        alert(`✅ ${data.success.status}: ${data.success.message}`);
      } else {
        alert(`❌ ${data.failure.status}: ${data.failure.message}`);
      }
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      alert("❌ Une erreur est survenue : " + error.message);
    }
  };

  const totalCart = getTotalCartAmount();

  return (
    <>
      <button className="GoBack" onClick={() => navigate("/cart")}>
        ⬅️ Retourner à la page du panier
      </button>

      <form className="place-order" onSubmit={handleSubmit}>
        <div className="place-order-left">
          <h2 className="title">Informations de livraison</h2>
          <div className="multi-fields">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="Prénom"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Nom"
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Adresse email"
            onChange={handleChange}
          />
          <input
            type="text"
            name="street"
            value={formData.street}
            placeholder="Rue"
            onChange={handleChange}
          />
          <div className="multi-fields">
            <input
              type="text"
              name="city"
              value={formData.city}
              placeholder="Ville"
              onChange={handleChange}
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              placeholder="État"
              onChange={handleChange}
            />
          </div>
          <div className="multi-fields">
            <input
              type="number"
              name="zipCode"
              value={formData.zipCode}
              placeholder="Code postal"
              onChange={handleChange}
            />
            <input
              type="text"
              name="country"
              value={formData.country}
              placeholder="Pays"
              onChange={handleChange}
            />
          </div>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            placeholder="Téléphone"
            onChange={handleChange}
          />
        </div>

        <div className="place-order-right">
          <div className="cart-total">
            <h2 className="title">Total du panier</h2>
            <div>
              <div className="cart-total-details">
                <p>Total</p>
                <p>{totalCart} DH</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Frais de livraison</p>
                <p>{totalCart === 0 ? 0 : deliveryFee} DH</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>{totalCart === 0 ? 0 : totalCart + deliveryFee} DH</b>
              </div>
            </div>
            <button type="submit" disabled={totalCart === 0}>
            PROCÉDER AU PAIEMENT
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
