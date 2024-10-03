import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose }) {
  const dialog = useRef();
  const [modalContainer, setModalContainer] = useState(null);

  useEffect(() => {
    // 모달 컨테이너를 동적으로 생성
    const container = document.createElement('div');
    container.id = 'modal';
    document.body.appendChild(container);
    setModalContainer(container);

    // 컴포넌트가 언마운트될 때 모달 컨테이너를 정리
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  useEffect(() => {
    if (dialog.current) {
      if (open) {
        dialog.current.showModal();
      } else {
        dialog.current.close();
      }
    }
  }, [open]);

  if (!modalContainer || !open) return null;

  return createPortal(
    <dialog className="modal fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4" ref={dialog} onClose={onClose}>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div id="confirmation-actions">
          {children}
        </div>
      </div>
    </dialog>,
    modalContainer
  );
}

export default Modal;
