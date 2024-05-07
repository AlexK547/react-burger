import styles from "./ingredient-details.module.css";
import { ingredientType } from "../../utils/types";

type IngredientDetailsProps = {
  itemModal: ingredientType;
};

export default function IngredientDetails({
  itemModal
}: IngredientDetailsProps) {
  return (
    <>
      <img src={itemModal["image_large"]} alt="img" className={styles.modal__img}/>
      <p className={styles.modal__description}>{itemModal.name}</p>
      <div className={styles.modal__composition}>
        <div className={styles["modal__composition-item"]}>
          <p>Калории,ккал</p>
          <p>{itemModal.calories}</p>
        </div>
        <div className={styles["modal__composition-item"]}>
          <p>Белки, г</p>
          <p>{itemModal.proteins}</p>
        </div>
        <div className={styles["modal__composition-item"]}>
          <p>Жиры, г</p>
          <p>{itemModal.fat}</p>
        </div>
        <div className={styles["modal__composition-item"]}>
          <p>Углеводы, г</p>
          <p>{itemModal.carbohydrates}</p>
        </div>
      </div>
    </>
  );
}
