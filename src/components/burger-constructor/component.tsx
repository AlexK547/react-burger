import React from "react";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientType } from "../../utils/types";

type ComponentProps = {
  item: ingredientType;
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
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item["image"]}
      />
    </div>
  );
}
