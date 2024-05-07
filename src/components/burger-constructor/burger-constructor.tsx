import React, { useState } from "react";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import Component from "./component";
import { ingredientType } from "../../utils/types";
import ModalOverlay from "../modal/modal-overlay";

type BurgerConstructorProps = {
  listData: ingredientType[];
};

export default function BurgerConstructor(props: BurgerConstructorProps) {
  const listBuns = props.listData.filter((item) => item.type === "bun");
  const listSauces = props.listData.filter((item) => item.type === "sauce");
  const listMains = props.listData.filter((item) => item.type === "main");
  const [buns, setBuns] = useState(listBuns);
  const [sauces, setSauces] = useState(listSauces);
  const [mains, setMains] = useState(listMains);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isIngredient, setIsIngredient] = useState(false);
  const [itemModal, setItemModal] = useState<ingredientType | null>(null);

  const openModalIngredient = (item: ingredientType) => {
    setIsOpenModal(true);
    setIsIngredient(true);
    setItemModal(item);
  };
  const openModalOrder = (item: ingredientType) => {
    setIsOpenModal(true);
    setIsIngredient(false);
    setItemModal(item);
  };

  return (
    <section className={styles["burger-constructor"]}>

      {itemModal && (
        <ModalOverlay
          isOpen={isOpenModal}
          setOpen={setIsOpenModal}
          isIngredient={isIngredient}
          itemModal={itemModal}
          clearItem={setItemModal}
        />
      )}

      <div className={styles.components}>
        <div className={styles["component_top-bottom"]} onClick={() => openModalIngredient(buns[0])}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={buns[0].name + " (верх)"}
            price={buns[0].price}
            thumbnail={buns[0]["image"]}
          />
        </div>

        <div className={styles.component__items}>
          <Component
            key={1}
            item={sauces[1]}
            openModal={openModalIngredient}
          />
          <Component
            key={2}
            item={mains[2]}
            openModal={openModalIngredient}
          />
          <Component
            key={3}
            item={mains[3]}
            openModal={openModalIngredient}
          />
          <Component
            key={4}
            item={mains[4]}
            openModal={openModalIngredient}
          />
          <Component
            key={5}
            item={mains[4]}
            openModal={openModalIngredient}
          />
          <Component
            key={6}
            item={mains[5]}
            openModal={openModalIngredient}
          />
          <Component
            key={7}
            item={mains[6]}
            openModal={openModalIngredient}
          />
        </div>

        <div className={styles["component_top-bottom"]} onClick={() => openModalIngredient(buns[0])}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={buns[0].name + " (низ)"}
            price={buns[0].price}
            thumbnail={buns[0]["image"]}
          />
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.info__price}>
          <p>{610}</p>
          <CurrencyIcon type="primary" />
        </div>
        <button
          type="button"
          className={styles.info__btn}
          onClick={() => openModalOrder(buns[0])}
        >
          Оформить заказ
        </button>
      </div>
    </section>
  );
}
