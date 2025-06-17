"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.getElementById("modal-root"));
  }, []);

  const handleOverlayClick = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleModalClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const modalContent = useMemo(
    () => (
      <div className={styles.overlay} onClick={handleOverlayClick}>
        <div className={styles.modal} onClick={handleModalClick}>
          <button className={styles.close} onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    ),
    [handleOverlayClick, handleModalClick, onClose, children]
  );

  if (!isOpen || !container) return null;

  return createPortal(modalContent, container);
};

export default React.memo(Modal);
