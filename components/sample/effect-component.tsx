import { useEffect, useState } from 'react';
import Modal from '@/components/sample/modal-component';
import DeleteConfirmation from '@/components/sample/delete-confirmation';

interface Movie {
  id: string;
  movie: string;
  rating: number;
  image: string;
  imdb_url: string;
}

const EffectComponent = () => {
  const [data, setData] = useState<Movie[] | null>(null);
  const [counter, serCounter] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const fetchData = () => {
    fetch('https://dummyapi.online/api/movies')
      .then(response => response.json())
      .then(data => setData(data));
  };

  // useEffect 훅을 사용해서 처음 렌더링 될 때만 실행되도록 처리
  useEffect(() => {
    console.log('EffectComponent mounted');
    fetchData()
  }, []);
  // fetchData 함수를 컴포넌트 본문에서 직접 호출하면, 상태가 업데이트될 때마다 컴포넌트가 다시 렌더링되고, 다시 fetchData 함수가 호출되어 상태가 업데이트되는 무한 루프
  // fetchData 함수가 상태를 업데이트하면 컴포넌트가 다시 렌더링되고, 다시 fetchData 함수가 호출되어 상태가 업데이트되는 과정이 반복됩니다.
  // fetchData();

  const incrementCounter = () => {
    serCounter(counter + 1);
  }

  const modalOnCancel = () => {
    console.log('cancel');
    setModalIsOpen(false);
  }

  const modalOnConfirm = () => {
    console.log('confirm');
    setModalIsOpen(false);
  }

  const openModal = () => {
    console.log('open modal');
    setModalIsOpen(!modalIsOpen);
  }

  return <>
    <Modal open={modalIsOpen} onClose={null}>
      <DeleteConfirmation
        onCancel={modalOnCancel}
        onConfirm={modalOnConfirm}
      />
    </Modal>
    <button onClick={fetchData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Refresh</button>
    <button onClick={incrementCounter} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Counter {counter}</button>
    <button
      onClick={() => window.location.href = '/sample/react-query'}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
    >
      go another page
    </button>
    <div>{data ? (
      data.map(movie => (
        <div key={movie.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <div onClick={openModal} className="p-4">
            <h2 className="text-xl font-bold mb-2">{movie.movie}</h2>
            <p className="text-gray-700 mb-2">Rating: {movie.rating}</p>
            <a className="text-blue-500 hover:underline" href={movie.imdb_url}>IMDB</a>
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