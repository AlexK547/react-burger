import React from 'react'
import styles from "./burger-ingredients.module.css"
import {
  Counter,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

type CardProps = {
  item: {
    "_id": string,
    "name": string,
    "type": string,
    "proteins": number,
    "fat": number,
    "carbohydrates": number,
    "calories": number,
    "price": number,
    "image": string,
    "image_mobile": string,
    "image_large": string,
    "__v": number
  },
  count: number
}

export default function Card( {item, count}: CardProps) {
  return (
    <div className={styles.card}>
    {count > 0 && (<Counter count={count} size="default" extraClass="m-1" />)}
    <img src={item["image"]} alt="img" />
    <div className={styles.card__price}>
      <p>{item.price}</p>
      <CurrencyIcon type="primary" />
    </div>
    <p className={styles.card__description}>{item.name}</p>
  </div>
  )
}
