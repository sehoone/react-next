"use client";
import React from 'react';
import { useAtom } from 'jotai';
import { createPortal } from 'react-dom';
import { modalContentAtom } from '@/atoms/commonAtom';

interface ModalProps {
  parent: HTMLElement;
}

const Modal: React.FC<ModalProps> = ({ parent }) => {
  const [modalContent, setModalContent] = useAtom(modalContentAtom);

  if (!modalContent) return null;

  return createPortal(
    <div className="modal">
      <div className="modal-content">
        {modalContent}
        <button onClick={() => setModalContent(null)}>Close</button>
      </div>
    </div>,
    parent
  );
};

export default Modal;