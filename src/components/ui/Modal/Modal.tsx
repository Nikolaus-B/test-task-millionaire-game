"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("modal-root");
    if (el) setContainer(el);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;
  if (!container) return null;
  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    container
  );
}
