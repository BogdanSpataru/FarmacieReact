import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchProd from "../../hooks/useFetchProd";
import useLocalStorage from "../../hooks/useLocalStorage";
import FavoriteButtonComponent from "../Produse/FavoriteButton";
import { CartContext } from "../../store/context";
import { useContext } from "react";
import {
  addToCart,
  removeFromCart,
  addToFav,
  removeFromFav,
} from "../../store/actions";
import { ProdusContainer, ProdusImgSingle, TitluProdus } from "./Produs.style";

function Produs() {
  const { img, titlu, brand, price, name, id } = useParams();
  const { prods: produs, error, loading } = useFetchProd(id);
  const { isLocalDataEmpty, localData, handleLocalData } =
    useLocalStorage("prods");

  const addNewId = () => {
    if (produs) {
      const local = !isLocalDataEmpty ? JSON.parse(localData) : [];
      const newLocalData = [...local, produs.name];
      handleLocalData("prods", JSON.stringify(newLocalData));
    }
  };

  useEffect(() => {
    if (localData || isLocalDataEmpty || produs) addNewId();
  }, [localData, isLocalDataEmpty, produs]);

  return (
    <ProdusContainer>
      {loading && !error && <div>Loading...</div>}
      {error && <div>Error on getting data, Server is down </div>}
      {produs && (
        <>
          <TitluProdus>{produs.titlu}</TitluProdus>
          <ProdusImgSingle src={produs.img} alt="Product" />
          <FavoriteButtonComponent
            id={produs.id}
            name={produs.name}
            img={produs.img}
            price={produs.price}
          />
        </>
      )}
    </ProdusContainer>
  );
}

export default Produs;
