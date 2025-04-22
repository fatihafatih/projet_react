import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

export const deliveryFee = 2;

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    getTotalQuantity,
  } = useContext(StoreContext);
  const totalQuantity = getTotalQuantity();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title cart-heading">
          <p>Articles</p>
          <p>Titre</p>
          <p>Prix</p>
          <p>Quantité</p>
          <p>Total</p>
          <p>Supprimer</p>
        </div>
        <br />
        <hr />
        {totalQuantity === 0 ? (
          <p className="NoItems">Aucun article dans le panier</p>
        ) : (
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <React.Fragment key={item._id}>
                  <div
                    className="cart-items-title cart-items-item"
                    key={item._id}
                  >
                    <img src={item.image} alt="food img" />
                    <p>{item.name}</p>
                    <p>{item.price} DH</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id]} DH</p>
                    <p
                      className="Remove"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <img
                        src={assets.remove_icon_cross}
                        alt="remove_icon_cross"
                      />
                    </p>
                  </div>
                  <hr key={`hr-${item._id}-${index}`} />

                </React.Fragment>
              );
            }
          })
        )}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total du panier</h2>
          <div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()} DH</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Livraison gratuite</p>
              <p>{getTotalCartAmount() === 0 ? 0 : deliveryFee} DH</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                
                {getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() + deliveryFee} DH
              </b>
            </div>
          </div>
          <button
            disabled={getTotalCartAmount() === 0}
            onClick={() => navigate("/order")}
          >
            PASSER À LA CAISSE
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Si vous avez un code promotionnel, saisissez-le ici</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Soumettre</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;