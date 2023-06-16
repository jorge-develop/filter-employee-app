import { useState, useEffect } from "react";

export const useFetchData = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return [data, loading, error, setData];
};
