import { useQuery as useReactQuery } from 'react-query';

export function useQuery<T>(key: string, url: string) {
  return useReactQuery<T>(key, () =>
    fetch('http://localhost:4000' + url).then((res) => res.json()),
  );
}
