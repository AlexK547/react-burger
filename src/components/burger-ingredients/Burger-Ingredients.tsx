import React, { useState } from "react";
import styles from "./burger-ingredients.module.css"
import { data } from "../../utils/data";
import Card from "./card";

export default function BurgerIngredients() {
  const listBuns = data.filter((item) => item.type === "bun");
  const listSauces = data.filter((item) => item.type === "sauce");
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