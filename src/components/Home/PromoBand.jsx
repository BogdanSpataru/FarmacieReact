import useFetchProd from "../../hooks/useFetchProd";
import { TrendContainer, TrendWrapper, ScrollButton } from "./Home.style";
import CardProdusBand from "./CardProdusBand";
import React, { useState } from "react";

function PromoBand() {
  const { prods, error, loading } = useFetchProd();
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const trendProds = prods ? prods.filter((el) => el.promo === true) : [];

  const handleNext = () => {
    if (trendProds.length > 0) {
      setStartIndex(
        (prevIndex) => (prevIndex + itemsPerPage) % trendProds.length
      );
    }
  };

  const handlePrev = () => {
    if (trendProds.length > 0) {
      setStartIndex((prevIndex) => {
        const newIndex = prevIndex - itemsPerPage;
        return newIndex < 0 ? trendProds.length + newIndex : newIndex;
      });
    }
  };

  const visibleProds = trendProds.slice(startIndex, startIndex + itemsPerPage);
  const wrappedProds =
    visibleProds.length < itemsPerPage
      ? visibleProds.concat(
          trendProds.slice(0, itemsPerPage - visibleProds.length)
        )
      : visibleProds;

  return (
    <TrendContainer>
      {loading && <div>Loading...</div>}
      {error && <div>{error}! Error on getting data, Server is down :( </div>}
      <ScrollButton onClick={handlePrev} disabled={trendProds.length === 0}>
        &lt;
      </ScrollButton>
      <TrendWrapper>
        {visibleProds?.map((prod, index) => (
          <CardProdusBand
            key={prod.name + index}
            name={prod.name}
            img={prod.img}
            {...prod}
          />
        ))}
      </TrendWrapper>
      <ScrollButton onClick={handleNext} disabled={trendProds.length === 0}>
        &gt;
      </ScrollButton>
    </TrendContainer>
  );
}

export default PromoBand;
