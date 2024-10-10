import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUsers } from '@/service/sample/sample-query';

const EffectComponent = () => {
  const { data, error, isLoading, refetch } = useUsers();
  const [counter, serCounter] = useState<number>(0);

  // useEffect 훅을 사용해서 처음 렌더링 될 때만 실행되도록 처리
  // useEffect(() => {
  //   console.log('EffectComponent mounted');
  // }, []);

  const incrementCounter = () => {
    serCounter(counter + 1);
  }

  return <>

    <button onClick={() => refetch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Refresh</button>
    <button onClick={incrementCounter} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Counter {counter}</button>
    <Link href="/sample/react-query"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
    >
      go another page
    </Link>
    <div>{data ? (
      data.map(user => (
        <div key={user.name} className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-700 mb-2">Rating: {user.age}</p>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500">Loading...</p>
    )}

    </div>
  </>;
};

export default EffectComponent;