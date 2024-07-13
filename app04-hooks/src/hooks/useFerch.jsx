import React, { useEffect, useState } from "react";

export default function useFerch(Url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Url);
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, [Url]);

  return { data };
}
