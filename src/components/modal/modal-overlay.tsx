import { useEffect } from "react";
import styles from "./modal.module.css";
import Modal from "./modal";
import { createPortal } from "react-dom";
import { ingredientType } from "../../utils/types";

type IngredientDetailsProps = {
  isOpen: boolean;
  setOpen: Function;
  isIngredient: boolean;
  itemModal: ingredientType;
  clearItem: Function;
};

const modalRoot = document.getElementById("react-modals");

export default function ModalOverlay({
  isOpen,
  setOpen,
  isIngredient,
  itemModal,
  clearItem,
}: IngredientDetailsProps) {
  useEffect(() => {
    const pressESC: EventListenerOrEventListenerObject = (e: any) => {
      if (e.keyCode == 27) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", pressESC);

    return () => document.removeEventListener("keydown", pressESC);
  }, []);

  const handleClick = (e: any) => {
    if (!e.target.closest("[data-id=modal]")) {
      setOpen(false);
    }
  };

  return (
    modalRoot &&
    createPortal(
      <>
        {isOpen && (
          <div className={styles["modal-overlay"]} onClick={handleClick}>
            <Modal
              setOpen={setOpen}
              itemModal={itemModal}
              isIngredient={isIngredient}
            />
          </div>
        )}
      </>,
      modalRoot
    )
  );
}
