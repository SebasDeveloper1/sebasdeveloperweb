import { useEffect, useState } from 'react';

export default function useLoadPage(): boolean {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.onload = () => {
        setIsLoading(false);
      };
    }
  }, []);

  return isLoading;
}
