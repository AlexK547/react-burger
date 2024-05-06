import React from "react";
import styles from "./burger-constructor.module.css";
import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

type ComponentProps = {
  item: {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
  };
  isDragIcon: boolean;
  openModal: Function;
};

export default function Component({
  item,
  isDragIcon,
  openModal,
}: ComponentProps) {
  const press = () => {
    openModal(item);
  };

  return (
    <div className={styles.component} onClick={press}>
      <DragIcon type="primary" />
      <div className={styles.ingredient}>
        <img className={styles.ingredient__img} src={item["image"]} alt="img" />
        <p className={styles.ingredient__description}>{item.name}</p>
        <div className={styles.ingredient__price}>
          <p>{item.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <div style={{ width: "26px" }}>
          <DeleteIcon type="primary" />
        </div>
      </div>
    </div>
  );
}
