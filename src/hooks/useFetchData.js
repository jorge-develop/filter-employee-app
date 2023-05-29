import React, { useState, useEffect } from "react";

export const useFetchData = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(true);
    } catch (err) {
      setError(err);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [data, loading, error, setData];
};
