import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Modal from './Modal';

export const useModal = () => {
  useEffect(() => {
    const addModalToContentsDiv = () => {
      if (typeof document !== 'undefined') {
        // div.div-contents 요소 찾기.
        const contentsDiv = document.querySelector('div.div-contents') as HTMLElement;

        if (contentsDiv) {
          const modalContainer = document.createElement('div');
          contentsDiv.appendChild(modalContainer); // contentsDiv의 하위에 모달 컨테이너를 추가.
          const root = createRoot(modalContainer);
          root.render(<Modal parent={contentsDiv} />);

          return () => {
            root.unmount();
            contentsDiv.removeChild(modalContainer);
          };
        } else {
          // contentsDiv가 존재하지 않으면 100ms 후에 다시 시도합니다.
          setTimeout(addModalToContentsDiv, 100);
        }
      }
    };

    addModalToContentsDiv();
  }, []);
};