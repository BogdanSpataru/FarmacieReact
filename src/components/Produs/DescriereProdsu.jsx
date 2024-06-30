import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchProd from "../../hooks/useFetchProd";
import useLocalStorage from "../../hooks/useLocalStorage";
import { InfoContainer, SectionTitle } from "./Produs.style";
import { TitluProdus } from "./Produs.style";
import { Description } from "../Produse/Produse.styled";

function DescriereProdus() {
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
    <InfoContainer>
      {loading && !error && <div>Loading...</div>}
      {error && <div>Error on getting data, Server is down </div>}
      {produs && (
        <>
          <TitluProdus>Descriere:</TitluProdus>
          <Description>{produs.description}</Description>
          <TitluProdus>Contraindicații:</TitluProdus>
          <Description>{produs.contraindicatii}</Description>
          <TitluProdus>Precautii:</TitluProdus>
          <Description>{produs.precautii}</Description>
        </>
      )}
    </InfoContainer>
  );
}

export default DescriereProdus;
