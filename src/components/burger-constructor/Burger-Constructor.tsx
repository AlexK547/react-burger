import React, { useState } from "react";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  CurrencyIcon,
  LockIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Component from "./component";
import Modal from "../modal/modal";

type BurgerConstructorProps = {
  listData: {
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
  }[];
};

export default function BurgerConstructor(props: BurgerConstructorProps) {
  const listBuns = props.listData.filter((item) => item.type === "bun");
  const listSauces = props.listData.filter((item) => item.type === "sauce");
  const listMains = props.listData.filter((item) => item.type === "main");
  const [buns, setBuns] = useState(listBuns);
  const [sauces, setSauces] = useState(listSauces);
  const [mains, setMains] = useState(listMains);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [itemModal, setItemModal] = useState({});

  const openModal = (item: any) => {
    setIsOpenModal(true);
    setItemModal(item);
  };

  return (
    <section className={styles["burger-constructor"]}>
      <Modal
        isOpen={isOpenModal}
        setOpen={setIsOpenModal}
        itemModal={itemModal}
        clearItem={setItemModal}
      ></Modal>
      <div className={styles.components}>
        <div style={{ marginLeft: "30px" }}>
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
            key={sauces[1]._id}
            item={sauces[1]}
            isDragIcon={true}
            openModal={openModal}
          />
          <Component
            key={mains[2]._id}
            item={mains[2]}
            isDragIcon={true}
            openModal={openModal}
          />
          <Component
            key={mains[3]._id}
            item={mains[3]}
            isDragIcon={true}
            openModal={openModal}
          />
          <Component
            key={mains[4]._id}
            item={mains[4]}
            isDragIcon={true}
            openModal={openModal}
          />
          <Component
            key={mains[4]._id}
            item={mains[4]}
            isDragIcon={true}
            openModal={openModal}
          />
          <Component
            key={mains[5]._id}
            item={mains[5]}
            isDragIcon={true}
            openModal={openModal}
          />
          <Component
            key={mains[6]._id}
            item={mains[6]}
            isDragIcon={true}
            openModal={openModal}
          />
        </div>

        <div style={{ marginLeft: "30px" }}>
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
        <button type="button" className={styles.info__btn}>
          Оформить заказ
        </button>
      </div>
    </section>
  );
}
