import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { defHttp } from '@/utils/http/axios';

enum Api {
  movies = '/movies',
}

interface Movie {
  id: string;
  movie: string;
  rating: number;
  image: string;
  imdb_url: string;
}

const httpMovies = async (): Promise<Movie[]> => {
  const data = await defHttp.get<Movie[]>({
    url: Api.movies
  });
  return data;
}
export const useMovies = (options?: UseQueryOptions<Movie[], Error>) => {
  return useQuery<Movie[], Error>({
    queryKey: ['movies'],
    queryFn: httpMovies,
    staleTime: 1000 * 60 * 1, // 1분 동안 캐시된 데이터를 사용
    retry: false, // 실패시 재시도 횟수
    ...options, // 전달된 옵션을 병합합니다.
  });
};