// components/ReactQueryComponent.tsx
"use client"; // 클라이언트 컴포넌트임을 명시합니다.
import React from 'react';
import { useMovies } from '@/hooks/useMovieApi';
import Link from 'next/link';

const ReactQueryComponent: React.FC = () => {
  const { data, error, isLoading, refetch } = useMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <button
        onClick={() => refetch()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        refresh
      </button>
      {/* Link 컴포넌트를 사용하여 다른 페이지로 이동처리. a태그를 사용하면 화면이 리로드가 되므로 spa의 장점을 얻지 못함 */}
      <Link href="/sample/side-effect"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        go another page
      </Link>
      {data ? (
        data.map(movie => (
          <div key={movie.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{movie.movie}</h2>
              <p className="text-gray-700 mb-2">Rating: {movie.rating}</p>
              <a className="text-blue-500 hover:underline" href={movie.imdb_url}>IMDB</a>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </>
  );
};

export default ReactQueryComponent;