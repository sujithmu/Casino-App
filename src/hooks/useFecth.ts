import { useState, useEffect } from 'react';
import { API } from '../config';


const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API}${url}`);
        if (!response.ok) {
          throw new Error(`HTTP error, status = ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      }catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('An unknown error occurred.'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;