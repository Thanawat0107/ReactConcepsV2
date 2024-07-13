import React, { useEffect, useState } from "react";

export default function useFerch(Url) {
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Url);
      const result = await response.json();
      setData(result);
    };
    setLoading(true);
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [Url]);

  return { data, Loading };
}
