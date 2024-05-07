import { ingredientType } from "../../utils/types";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import styles from "./modal.module.css";

type ModalProps = {
  setOpen: Function;
  isIngredient: boolean;
  itemModal: ingredientType;
};

export default function Modal({
  setOpen,
  isIngredient,
  itemModal,
}: ModalProps) {
  return (
    <div className={styles["modal"]} data-id="modal">
      <div className={styles.modal__head}>
        <h2 className={styles["modal__head-title"]}>
          {isIngredient ? "Детали ингредиента" : ""}
        </h2>
        <svg
          onClick={() => setOpen(false)}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9 7.58579L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L10.4142 9L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L9 10.4142L1.70711 17.7071C1.31658 18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
            fill="#F2F2F3"
          />
        </svg>
      </div>
      {isIngredient ? (
        <IngredientDetails itemModal={itemModal} />
      ) : (
        <OrderDetails />
      )}
    </div>
  );
}
