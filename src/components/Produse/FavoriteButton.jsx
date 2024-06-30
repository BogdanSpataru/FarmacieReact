import React, { useState, useEffect } from "react";
import { FavoriteButton, FavoriteIcon } from "./Produse.styled";
import { useContext } from "react";
import { CartContext } from "../../store/context";
import { removeFromFav, addToFav } from "../../store/actions";

const isFavorite = (store, id) => store.favValue.some((prod) => prod.id === id);

const FavoriteButtonComponent = ({ id, name, img, price }) => {
  const { stateGlobalCart, dispatchCart } = useContext(CartContext);

  let [isFav, setIsFav] = useState(isFavorite(stateGlobalCart, id));
  useEffect(() => {
    setIsFav(isFavorite(stateGlobalCart, id));
  }, [stateGlobalCart]);

  const handleFavoriteClick = () => {
    if (isFav) {
      dispatchCart(removeFromFav(id));
    } else {
      dispatchCart(addToFav(id, name, img, price));
    }
  };

  const [hover, setHover] = useState(false);

  return (
    <FavoriteButton
      onClick={handleFavoriteClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FavoriteIcon role="img" aria-label="Favorite">
        {hover ? "❤️" : isFav ? "❤️" : "🤍"}
      </FavoriteIcon>
    </FavoriteButton>
  );
};

export default FavoriteButtonComponent;
