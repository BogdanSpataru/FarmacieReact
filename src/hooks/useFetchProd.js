import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001";

const useFetchProd = (id = "") => {
  const [prods, setProd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/prods/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const prodData = await response.json();
        setProd(prodData);
        setLoading(false);
      } catch (error) {
        setError("Eroare 808");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { prods, loading, error };
};

export default useFetchProd;
