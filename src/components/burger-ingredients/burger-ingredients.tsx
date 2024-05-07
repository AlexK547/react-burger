import React, { useState } from "react";
import styles from "./burger-ingredients.module.css";
import Card from "./card";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { ingredientType } from "../../utils/types";
import ModalOverlay from "../modal/modal-overlay";

type BurgerIngredientsProps = {
  listData: ingredientType[];
};

export default function BurgerIngredients(props: BurgerIngredientsProps) {
  const listBuns = props.listData.filter((item) => item.type === "bun");
  const listSauces = props.listData.filter((item) => item.type === "sauce");
  const [buns, setBuns] = useState(listBuns);
  const [sauces, setSauces] = useState(listSauces);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isIngredient, setIsIngredient] = useState(false);
  const [itemModal, setItemModal] = useState(null);

  const openModalIngredient = (item: any) => {
    setIsOpenModal(true);
    setIsIngredient(true);
    setItemModal(item);
  };

  return (
    <section className={styles.ingredients}>
      {itemModal && (
        <ModalOverlay
          isOpen={isOpenModal}
          setOpen={setIsOpenModal}
          isIngredient={isIngredient}
          itemModal={itemModal}
          clearItem={setItemModal}
        />
      )}
      <h1>Соберите бургер</h1>
      <ul className={styles.tabs}>
        <li className={`${styles.tabs__item} ${styles.tabs__item_select}`}>
          Булки
        </li>
        <li className={styles.tabs__item}>Соусы</li>
        <li className={styles.tabs__item}>Начинки</li>
      </ul>
      <div className={styles.items}>
        <div className={styles.buns}>
          <h2>Булки</h2>
          <div className={styles.cards}>
            <Card item={buns[0]} count={1} openModal={openModalIngredient} />
            <Card item={buns[1]} count={0} openModal={openModalIngredient} />
          </div>
        </div>

        <div className={styles.sauces}>
          <h2>Соусы</h2>
          <div className={styles.cards}>
            <Card item={sauces[0]} count={0} openModal={openModalIngredient} />
            <Card item={sauces[1]} count={0} openModal={openModalIngredient} />
            <Card item={sauces[2]} count={1} openModal={openModalIngredient} />
            <Card item={sauces[3]} count={0} openModal={openModalIngredient} />
          </div>
        </div>
      </div>
    </section>
  );
}
