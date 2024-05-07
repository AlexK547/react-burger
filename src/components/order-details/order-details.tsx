import styles from "./order-details.module.css";
import imageDone from "../../images/png/done.png";

export default function OrderDetails() {
  return (
    <>
      <div className={styles["order-details__number"]}>034536</div>
      <p className={styles["order-details__id-order"]}>идентификатор заказа</p>
      <img src={imageDone} alt="img" />
      <p className={styles["order-details__status"]}>
        Ваш заказ начали готовить
      </p>
      <p className={styles["order-details__message"]}>
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}
