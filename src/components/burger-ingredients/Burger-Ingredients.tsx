import React, { useState } from "react";
import styles from "./burger-ingredients.module.css"
import Card from "./card";

type BurgerIngredientsProps = {
  listData: {
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
  }[]
}

export default function BurgerIngredients(props: BurgerIngredientsProps) {
  const listBuns = props.listData.filter((item) => item.type === "bun");
  const listSauces = props.listData.filter((item) => item.type === "sauce");
  const [buns, setBuns] = useState(listBuns);
  const [sauces, setSauces] = useState(listSauces);

  return (
  <section className={styles.ingredients}>
    <h1>Соберите бургер</h1>
    <ul className={styles.tabs}>
      <li className={`${styles.tabs__item} ${styles.tabs__item_select}`}>Булки</li>
      <li className={styles.tabs__item}>Соусы</li>
      <li className={styles.tabs__item}>Начинки</li>
    </ul>
    <div className={styles.items}>
      <div className={styles.buns}>
        <h2>Булки</h2>
        <div className={styles.cards}>
          <Card item={buns[0]} count={1}/>
          <Card item={buns[1]} count={0}/>
        </div>
      </div>

      <div className={styles.sauces}>
        <h2>Соусы</h2>
        <div className={styles.cards}>
          <Card item={sauces[0]} count={0}/>
          <Card item={sauces[1]} count={0}/>
          <Card item={sauces[2]} count={1}/>
          <Card item={sauces[3]} count={0}/>
        </div>
      </div>
    </div>
  </section>);
}