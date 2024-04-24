import React, { useState } from "react";
import styles from "./burger-constructor.module.css";
import { data } from "../../utils/data";
import {
  CurrencyIcon,
  DragIcon,
  LockIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Component from "./component";

export default function BurgerConstructor() {
  const listBuns = data.filter((item) => item.type === "bun");
  const listSauces = data.filter((item) => item.type === "sauce");
  const listMains = data.filter((item) => item.type === "main");
  const [buns, setBuns] = useState(listBuns);
  const [sauces, setSauces] = useState(listSauces);
  const [mains, setMains] = useState(listMains);
  console.log(mains.length);

  return (
    <section className={styles["burger-constructor"]}>
      <div className={styles.components}>
        <div className={styles.component}>
          {/* <DragIcon type="primary" /> */}
          <div style={{ width: "26px" }}></div>
          <div className={styles.ingredient}>
            <img
              className={styles.ingredient__img}
              src={buns[0]["image"]}
              alt="img"
            />
            <p className={styles.ingredient__description}>
              {buns[0].name + " (верх)"}
            </p>
            <div className={styles.ingredient__price}>
              <p>{buns[0].price}</p>
              <CurrencyIcon type="primary" />
            </div>
            <LockIcon type="secondary" />
          </div>
        </div>

        <div className={styles.component__items}>
          <Component key={0} item={sauces[1]} isDragIcon={true} />
          <Component key={1} item={mains[2]} isDragIcon={true} />
          <Component key={2} item={mains[3]} isDragIcon={true} />
          <Component key={3} item={mains[4]} isDragIcon={true} />
          <Component key={4} item={mains[4]} isDragIcon={true} />
          <Component key={5} item={mains[5]} isDragIcon={true} />
          <Component key={6} item={mains[6]} isDragIcon={true} />
        </div>

        <div className={styles.component}>
          {/* <DragIcon type="primary" /> */}
          <div style={{ width: "26px" }}></div>
          <div className={styles.ingredient}>
            <img
              className={styles.ingredient__img}
              src={buns[0]["image"]}
              alt="img"
            />
            <p className={styles.ingredient__description}>
              {buns[0].name + " (низ)"}
            </p>
            <div className={styles.ingredient__price}>
              <p>{buns[0].price}</p>
              <CurrencyIcon type="primary" />
            </div>
            <LockIcon type="secondary" />
          </div>
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
