import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchProd from "../../hooks/useFetchProd";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  LinkProdus,
  ProductDetailsContainer,
  Rating,
  Stars,
  RatingValue,
} from "./Produs.style";

function ProductDetails() {
  const { id } = useParams(); //am extras doar id din {id: 1}
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
    <ProductDetailsContainer>
      {loading && !error && <div>Loading...</div>}
      {error && <div>Error on getting data, Server is down </div>}
      {produs && (
        <>
          <Rating>
            <Stars>★★★★★</Stars>
            <RatingValue>5</RatingValue>
          </Rating>
          <p>
            Brand: <LinkProdus href="#">{produs.brand}</LinkProdus>
          </p>
          <p>
            Gama: <LinkProdus href="#">{produs.name}</LinkProdus>
          </p>
          <p>Cod produs: 6424835002130</p>
          <p>Data expirarii: 30-01-2027</p>
          <p>Tip: Dispozitiv medical</p>
          <p>Vandut de: Farmacia Tei SRL</p>
        </>
      )}
    </ProductDetailsContainer>
  );
}

export default ProductDetails;
