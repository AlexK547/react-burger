import React, { MouseEventHandler } from "react";
import styles from "./burger-ingredients.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientType } from "../../utils/types";

type CardProps = {
  item: ingredientType;
  count: number;
  openModal: Function
};

export default function Card({ item, count, openModal }: CardProps) {
  const press: MouseEventHandler = (e) => {
    openModal(item);
  }

  return (
    <div className={styles.card} onClick={press}>
      {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
      <img src={item["image"]} alt="img" />
      <div className={styles.card__price}>
        <p>{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.card__description}>{item.name}</p>
    </div>
  );
}
