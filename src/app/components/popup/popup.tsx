"use client";

import { useEffect, useState } from "react";
import styles from "./popup.module.css";
import { ReactLenis, useLenis } from 'lenis/react';

interface PopupProps {
  title: string;
  texts: string[];
}

const Popup: React.FC<PopupProps> = ({ title, texts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      lenis?.stop();
    }, 500);

    return () => {
      clearTimeout(timer);
      lenis?.start();
    };
  }, [lenis]);

  const closePopup = () => {
    setIsOpen(false);
    lenis?.start();
  };

  return (
    <div
      className={`${styles.popupOverlay} ${isOpen ? styles.show : ""}`}
      onClick={closePopup}
    >
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closePopup}>
          &times;
        </button>
        <h2>{title}</h2>
        <div>
          {texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
