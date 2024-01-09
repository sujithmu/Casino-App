import { useState } from 'react';
import { API } from '../config';

interface APIError {
  status: string;
  error: string;
}

const usePost = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const postData = async (body: Record<string, string>) => {
    setLoading(true);
    try {
      const response = await fetch(`${API}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const result: APIError = await response.json();
        throw new Error(result.error);
      }
      
      const result: T = await response.json();

      setData(result);
      setError(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error('An unknown error occurred.'));
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, post: postData };
};

export default usePost;